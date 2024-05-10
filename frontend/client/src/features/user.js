import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,

};

export const register = createAsyncThunk(
	'users/register',
	async ({ first_name, last_name, email, password,account_type }, thunkAPI) => {
		const body = JSON.stringify({
			first_name,
			last_name,
			email,
			password,
			account_type,
		});

		try {
			const res = await fetch('http://localhost:8000/users/customUser', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			});

			const data = await res.json();

			if (res.status === 201) {
				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

export const registerCompSuper = createAsyncThunk(
	'users/registerCompSuper',
	async ({ first_name, last_name, email, password, role,id }, thunkAPI) => {
	  const body = JSON.stringify({
		first_name,
		last_name,
		email,
		password,
		account_type: 'COMPANY_SUPERVISOR',
		role,
		id,
	  });
  
	  try {
		const res = await fetch(`http://localhost:8000/users/company/register/compsuper/${id}`, {
		  method: 'POST',
		  headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
		  },
		  body,
	  });

	  const data = await res.json();

	  if (res.status === 201) {
		  return data;
	  } else {
		  return thunkAPI.rejectWithValue(data);
	  }
  } catch (err) {
	  return thunkAPI.rejectWithValue(err.response.data);
  }
}
);
  
export const registerUniSuper = createAsyncThunk(
	'users/registerUniSuper',
	async ({ first_name, last_name, email, password }, thunkAPI) => {
	  const body = JSON.stringify({
		first_name,
		last_name,
		email,
		password,
		account_type: 'UNIVERSITY_SUPERVISOR',
	  });
  
	  try {
		const res = await fetch(`http://localhost:8000/users/register/unisuper`, {
		  method: 'POST',
		  headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
		  },
		  body,
	  });

	  const data = await res.json();

	  if (res.status === 201) {
		  return data;
	  } else {
		  return thunkAPI.rejectWithValue(data);
	  }
  } catch (err) {
	  return thunkAPI.rejectWithValue(err.response.data);
  }
}
);

export const registerStd = createAsyncThunk(
	'users/registerStd',
	async ({ first_name, last_name, email, password }, thunkAPI) => {
	  const body = JSON.stringify({
		first_name,
		last_name,
		email,
		password,
		account_type: 'STUDENT',
	  });
  
	  try {
		const res = await fetch('http://localhost:8000/users/register/student', {
		  method: 'POST',
		  headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
		  },
		  body,
	  });

	  const data = await res.json();

	  if (res.status === 201) {
		  return data;
	  } else {
		  return thunkAPI.rejectWithValue(data);
	  }
  } catch (err) {
	  return thunkAPI.rejectWithValue(err.response.data);
  }
}
);

export const getUser = createAsyncThunk('users/me', async (cookie, thunkAPI) => {
	try {
		const res = await fetch('http://127.0.0.1:8000/users/me', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Authorization': `Bearer ${cookie}`,
			},
			
			credentials: 'include',
		});

		const data = await res.json();

		if (res.status === 200) {
			return data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});


export const login = createAsyncThunk(
	'users/login',
	async ({ email, password }, thunkAPI) => {
		const body = JSON.stringify({
			email,
			password,
		});

		try {
			// const csrftoken = getCookie('csrftoken');
			const res = await fetch('http://127.0.0.1:8000/users/token/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					// 'X-CSRFToken': csrftoken
				},
				body,
				credentials:"include",
			});

			const data = await res.json();

			if (res.status === 200) {
				const { dispatch } = thunkAPI;
				dispatch(getUser(data.access));

				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);
// export const checkAuth = createAsyncThunk(
// 	'users/verify',
// 	async (_, thunkAPI) => {
// 		try {
// 			const res = await fetch('http://localhost:8000/api/users/verify', {
// 				method: 'GET',
// 				headers: {
// 					Accept: 'application/json',
// 				},
// 			});

// 			const data = await res.json();

// 			if (res.status === 200) {
// 				const { dispatch } = thunkAPI;

// 				dispatch(getUser());

// 				return data;
// 			} else {
// 				return thunkAPI.rejectWithValue(data);
// 			}
// 		} catch (err) {
// 			return thunkAPI.rejectWithValue(err.response.data);
// 		}
// 	}
// );

export const logout = createAsyncThunk('users/logout', async (cookie, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:8000/api/users/logout', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
				'Authorization': `Bearer ${cookie}`,
            },credentials:'include'
        });

        const data = await res.json();

        if (res.status === 200) {
            Cookies.remove('access'); // Replace 'your-cookie-name' with the name of your cookie
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetRegistered: state => {
			state.registered = false;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
			})
			.addCase(register.fulfilled, state => {
				state.loading = false;
				state.registered = true;

			})
			.addCase(register.rejected, state => {
				state.loading = false;
				state.isError = true;
			})

			//company supervisior

			.addCase(registerCompSuper.pending, state => {
				state.loading = true;
			})
			.addCase(registerCompSuper.fulfilled, state => {
				state.loading = false;
				state.registered = true;

			})
			.addCase(registerCompSuper.rejected, state => {
				state.loading = false;
				state.isError = true;
			})

			// UNISUPER 

			.addCase(registerUniSuper.pending, state => {
				state.loading = true;
			})
			.addCase(registerUniSuper.fulfilled, state => {
				state.loading = false;
				state.registered = true;

			})
			.addCase(registerUniSuper.rejected, state => {
				state.loading = false;
				state.isError = true;
			})

			// Student 

			.addCase(registerStd.pending, state => {
				state.loading = true;
			})
			.addCase(registerStd.fulfilled, state => {
				state.loading = false;
				state.registered = true;

			})
			.addCase(registerStd.rejected, state => {
				state.loading = false;
				state.isError = true;
			})
			
			.addCase(login.pending, state => {
				state.loading = true;
			})
			.addCase(login.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(login.rejected, state => {
				state.loading = false;
			})
			.addCase(getUser.pending, state => {
				state.loading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.isAuthenticated =true
				state.user = action.payload;
			})
			.addCase(getUser.rejected, state => {
				state.loading = false;
				state.isAuthenticated = false;
			})
			// .addCase(checkAuth.pending, state => {
			// 	state.loading = true;
			// })
			// .addCase(checkAuth.fulfilled, state => {
			// 	state.loading = false;
			// 	state.isAuthenticated = true;
			// })
			// .addCase(checkAuth.rejected, state => {
			// 	state.loading = false;
			// })
			.addCase(logout.pending, state => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(logout.rejected, state => {
				state.loading = false;
			});
	},

})

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;