import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'; 
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function EditUniForm(props) {
    let [isModal,setIsModal]=useState(false) 
        let handelOnClick =()=> {
                setIsModal(true)
        }
        let handelOnClickX =()=> {
                setIsModal(false)
        }

        const onSubmit = async (e) => {
                e.preventDefault();
        
        try {
            const res2 = await fetch(`http://127.0.0.1:8000/users/user/${props.id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            });
            if (!res2.ok) {
                throw new Error("Failed to fetch data");
            }
            await res2.json();
            // console.log(user.id);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
  return (
    <div className=' gap margin-bottom' >
        <span className='bold super title-add-super'>Edit Supervisor</span>
        <form className='edit-compsuper-form-inputs' onSubmit={props.onSubmit}>
            <div className='sm-input'>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='First Name' name='first_name' onChange={props.onChange}/>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='Last Name' name='last_name'   onChange={props.onChange}/>
            </div>
                        
            <div className='edit-compsuper-form-btns'>
                <button className='button-size-input navy-bk gray-font'  type = "submit">Edit</button>
                <button className='button-size-input navy-bk gray-font'  type = "submit" onClick={onSubmit}>Delete</button>
                <Link to={`/RegUniSuper`}>
                    <button className='button-size-input navy-bk gray-font'>Cancel</button>
                </Link>
            </div>

        </form>
    </div>
  )
}

export default EditUniForm