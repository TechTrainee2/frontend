import React from 'react'
import img from '../../static/bk2.png'
import Navbar from '../../component/main/Navbar'
import Form from '../../component/main/Form'
import smallbk2 from '../../static/sm-bk2.png';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import  { resetRegistered, login } from '../../features/user';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../../features/user';


function SignIn() {

  const dispatch = useDispatch();
	const { loading, isAuthenticated, registered,user } = useSelector(
		state => state.user
	);
  const [isError,setIsError]= useState(false)
  const [Error,setError]= useState([])
  // const [isPasswordError,setIsPasswordError]= useState(false)
  // const [PasswordError,setPasswordError]= useState([])

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (registered) dispatch(resetRegistered());
	}, [registered]);

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();

    const data = await dispatch(login({ email, password }));
    
  
    // if (Object.keys(data.payload)){
    //   setIsError(true)
    //   console.log(data)
    //   setError(data.payload["detail"])
    // }
   
	};
	


  let [isClicked, setisClicked] = useState(false);

  let handelOnClick = () => {
    if (isClicked === false) {
      setisClicked(true);
    } else {
      console.log('hi')
      setisClicked(false);
    }
  };
  // console.log(user.account_type)
  if (user){

    if (isAuthenticated && user.account_type=="STUDENT") return <Navigate to='/stdhome' />;
    if (isAuthenticated && user.account_type=="REGISTRATION") return <Navigate to='/reghome' />;
    if (isAuthenticated && user.account_type=="DEPARTMENT") return <Navigate to='/depHome' />;
    if (isAuthenticated && user.account_type=="COMPANY_SUPERVISOR") return <Navigate to='/CompSuperHome' />;
    if (isAuthenticated && user.account_type=="COMPANY") return <Navigate to='/compHome' />;
    if (isAuthenticated && user.account_type=="UNIVERSITY_SUPERVISOR") return <Navigate to='/uniSuper' />;
  }
  


  return (
    <>
    <Navbar/>
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={`menu-sandwich ${isClicked&&"active"}`}  onClick={handelOnClick}>
      <path fill='#1c3150' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
    <div className={`${isClicked?'show': 'hidden'} menu`} >
      
      <div className='gray-bk menu-bk'>
        <div className='menu-nav xl-font-super'>
        <NavLink to= '/' className='not-clicked '>Home</NavLink>
        <NavLink to='/About' className='not-clicked'>About Us</NavLink>
        <NavLink to='/SignIn' className='not-clicked' >Sign In</NavLink>
        <NavLink to='/SignUp' className='not-clicked'>Sign Up</NavLink></div>
      

      </div>

    </div>
        <span className='bold welcome'>Welcome Back</span>
        <img src={img} className='bk1 '/>
        <img src={smallbk2} className='diplay-none-disktop-sm-bk1 '/>
     </div>
      <Form
        email = {email}
        password = {password}
        onChange={onChange}
        onSubmit={onSubmit}
        isError={isError}
        Error ={Error}
      /> 
    </>
  )
}

export default SignIn