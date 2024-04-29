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

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();

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
	};

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

        /> 
    </>
  )
}

export default AddCompSuper