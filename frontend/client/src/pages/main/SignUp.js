import React from 'react'
import img from '../../static/bk3.png'
import Navbar from '../../component/main/Navbar'
import Form2 from '../../component/main/Form2'
import smallbk3 from '../../static/sm-bk3.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { register } from '../../features/user';
import { Compregister } from '../../features/user';

function SignUp() {
  const dispatch = useDispatch();
  const { registered, loading } = useSelector(state => state.user);
  const [isEmailError,setIsEmailError]= useState(false)
  const [EmailError,setEmailError]= useState([])
  const [isPasswordError,setIsPasswordError]= useState(false)
  const [PasswordError,setPasswordError]= useState([])
  let [passError, setPassError] = useState();
  let [emError, setEmError] = useState();

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comp_id: '',
    password: '',
    // account_type: 'COMPANY',
	});

  const { name, email, comp_id, password } = formData;
  
  const fetchEmails = async () => {
    const response = await fetch('http://127.0.0.1:8000/users/user/users');
    const data = await response.json();
    return data.map(user => user.email);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPassError('Invalid password. Password must be at least 8 characters long and contain both numbers and letters.');
      console.error('Invalid password. Password must be at least 8 characters long and contain both numbers and letters.');
      return;
    }
    else if (!email) {
      setEmError('Email field is empty');
      setPassError('');
      console.error('Email field is empty');
      return;
    }
  
    // Fetch emails
    const emails = await fetchEmails();
  
    // Check if email exists
    if (emails.includes(email)) {
      setEmError('Email already exists');
      setPassError('');
      console.error('Email already exists');
      return;
    }
    else{
      setPassError('');
      setEmError('');
      setIsPasswordError(false)
      setPasswordError([])
      setIsEmailError(false)
      setEmailError([])
  
      let data = await dispatch(Compregister({ name, email, password,comp_id }));
      if (Object.keys(data.payload).includes("password")){
        setIsPasswordError(true)
        setPasswordError(data.payload["password"])
      }
      if (Object.keys(data.payload).includes("email")){
        setIsEmailError(true)
        setEmailError(data.payload["email"])
      }
    }
	};

  let [isClicked, setisClicked] = useState(false);

  let handelOnClick = () => {
    if (isClicked === false) {
      setisClicked(true);
    } else {
      setisClicked(false);
    }
  };

  if (registered) return <Navigate to='/SignIn' />;

  return (
    <>
    <Navbar/>
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={`menu-sandwich ${isClicked&&"active"}`}  onClick={handelOnClick}>
      <path fill='#CBD6DA' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
    <div className={`${isClicked?'show': 'hidden'} menu`} >
      
      <div className='navy-bk menu-bk '>
        <div className='menu-nav xl-font-super '>
        <NavLink to= '/' className='not-clicked gray-font'>Home</NavLink>
        <NavLink to='/About' className='not-clicked gray-font'>About Us</NavLink>
        <NavLink to='/SignIn' className='not-clicked gray-font' >Sign In</NavLink>
        <NavLink to='/SignUp' className='not-clicked gray-font'>Sign Up</NavLink></div>
      

      </div>

    </div>
      <span className='bold gray-font create-acc'>Create Account</span>
      <img src={img} className='bk1'/>
      <img src={smallbk3} className='diplay-none-disktop-sm-bk1 '/>
     </div>

        <Form2
        onChange={onChange}
        onSubmit={onSubmit}
        isPasswordError ={isPasswordError}
        PasswordError ={PasswordError} 
        isEmailError={isEmailError}
        EmailError ={EmailError}
        passError={passError}
        emError={emError}

        /> 
    </>
  )
}

export default SignUp