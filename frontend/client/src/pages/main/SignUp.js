import React from 'react'
import img from '../../static/bk3.png'
import Navbar from '../../component/main/Navbar'
import Form2 from '../../component/main/Form2'
import smallbk3 from '../../static/sm-bk3.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SignUp() {
  const { registered, loading } = useSelector(state => state.user);
  
  
  const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

  let [isClicked, setisClicked] = useState(false);

  let handelOnClick = () => {
    if (isClicked === false) {
      setisClicked(true);
    } else {
      console.log('hi')
      setisClicked(false);
    }
  };
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

        <Form2/> 
    </>
  )
}

export default SignUp