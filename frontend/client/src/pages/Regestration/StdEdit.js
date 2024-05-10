import React from 'react'
import logo from '../../static/logo.png'
import { useState } from 'react';
import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';
import EditStdForm from '../../component/Regestration/EditStdForm';
import { Navigate } from 'react-router-dom';

function StdEdit() {
    let { id } = useParams();
    let [allowNavigate, setAllowNavigate] = useState(false);
    const dispatch = useDispatch();
  
    // // Get the profile by id
    let { user, loading } = useSelector((state) => state.user);
  
    let [data,setData]=useState({
      'first_name':'',
      'last_name':'',
      })   

      const onSubmit = async (e) => {
        e.preventDefault();
      
        // Create an object that only includes fields from data that are not empty strings
        const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
          if (value !== '') {
            newData[key] = value;
          }
          return newData;
        }, {});
        try {
          const res = await fetch(`http://127.0.0.1:8000/users/stdupdate/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              body: JSON.stringify(nonEmptyData),
          });
          if (!res.ok) {
            throw new Error('Failed to upload file');
          }
          const data = await res.json();
          // console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
        setAllowNavigate(true);
      };
    let onChange = (e) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      
      setData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }


  return (
    <>
    <img src={logo} className='logo-add' />

        <EditStdForm
        id={id}
        onChange={onChange}
        onSubmit={onSubmit}

        /> 
        {allowNavigate && <Navigate to={`/RegStd`}/>}
    </>
  )
}

export default StdEdit