import React from 'react'
import logo from '../../static/logo.png'
import CreateAccForm from '../../component/company/CreateAccForm'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';
import user, { registerCompSuper } from '../../features/user';

function AddCompSuper() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const {user } = useSelector(state => state.user);

  const [isEmailError,setIsEmailError]= useState(false)
  const [EmailError,setEmailError]= useState([])
  const [isPasswordError,setIsPasswordError]= useState(false)
  const [PasswordError,setPasswordError]= useState([])
  let [allowNavigate, setAllowNavigate] = useState(false);
  let [passError, setPassError] = useState();
  let [emError, setEmError] = useState();


  const [formData, setFormData] = useState({
    first_name: '',
    last_name:'',
    email: '',
    account_type: 'company_supervisor',
    password: '',
    role:'',
    id: `${user.id}`,
	});

  const { first_name,last_name, email, password,role } = formData;

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

      let data = await dispatch(registerCompSuper({ first_name,last_name, email, password,role,id }));
      console.log(data);
      if (Object.keys(data.payload).includes("password")){
        setIsPasswordError(true)
        setPasswordError(data.payload["password"])
      }
      if (Object.keys(data.payload).includes("email")){
        setIsEmailError(true)
        setEmailError(data.payload["email"])
      }
      
        setAllowNavigate(true)
    }
	};
  // if (registered) return <Navigate to={`/compSuper/${id}`} />;


  return (
    <>
    <img src={logo} className='logo-add' />

        <CreateAccForm
        id={user.id}
        onChange={onChange}
        onSubmit={onSubmit}
        isPasswordError ={isPasswordError}
        PasswordError ={PasswordError} 
        isEmailError={isEmailError}
        EmailError ={EmailError}
        emError={emError}
        passError={passError}

        /> 
        {allowNavigate ? <Navigate to={`/compSuper/${id}`} /> : <></>}
    </>
  )
}

export default AddCompSuper