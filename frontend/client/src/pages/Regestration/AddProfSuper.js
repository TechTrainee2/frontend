import React from 'react'
import logo from '../../static/logo.png'
import CreateAccForm from '../../component/Regestration/CreateAccForm'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUniSuper } from '../../features/user';
import { useParams } from 'react-router-dom';

function AddProfSuper() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { registered, loading } = useSelector(state => state.user);
  const {user } = useSelector(state => state.user);
  const [isEmailError,setIsEmailError]= useState(false)
  const [EmailError,setEmailError]= useState([])
  const [isPasswordError,setIsPasswordError]= useState(false)
  const [PasswordError,setPasswordError]= useState([])
  let [allowNavigate, setAllowNavigate] = useState(false);
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    // account_type: 'university_supervisor',
	});

  const { first_name,last_name, email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();

    setIsPasswordError(false)
    setPasswordError([])
    setIsEmailError(false)
    setEmailError([])

		let data = await dispatch(registerUniSuper({ first_name,last_name, email, password}));
    console.log(data);
    if (Object.keys(data.payload).includes("password")){
      setIsPasswordError(true)
      setPasswordError(data.payload["password"])
    }
    if (Object.keys(data.payload).includes("email")){
      setIsEmailError(true)
      setEmailError(data.payload["email"])
    }
    setAllowNavigate(true);
	};

  return (
    <>
    <img src={logo} className='logo-add' />

        <CreateAccForm
        onChange={onChange}
        onSubmit={onSubmit}
        isPasswordError ={isPasswordError}
        PasswordError ={PasswordError} 
        isEmailError={isEmailError}
        EmailError ={EmailError}

        /> 
        {allowNavigate && <Navigate to={`/RegUniSuper`}/>}
    </>
  )
}

export default AddProfSuper

    {/*
    //   let [isAdd,setIsAdd]=useState(false) 
//   let handelOnClickAdd =()=> {
//       setIsAdd(true)
//   }
//   let handelOnClickAddNo =()=> {
//       setIsAdd(false)
//   } <div className={isAdd?'show': 'hidden'} >
        <div className='reg-modal-bk'></div>
        <div className='reg-add-std-box '>
            <div className='reg-add-std-box-comp'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickAddNo} >
                    <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <div className='reg-upload-comp'>
                    <span className='bold navy-font'>Upload Excel Sheet</span>
                    <label>
                        <input type='file' accept=".xlsx, .xls" name='img' className='display-img'/> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill='#1c3150' d="M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z"/>
                        </svg> 
                    </label>
                     <button className='reg-button-size navy-bk white-font'>Done</button>
                </div>
        </div>                
    </div> */}
    