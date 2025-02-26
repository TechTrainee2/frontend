import React from 'react'
import { Link } from 'react-router-dom'

function CreateAccForm(props) {
  return (
    <>
    <div className=' gap margin-bottom' >
        <span className='bold super title-add-super'>Add Supervisor</span>
        <form className='form-inputs' onSubmit={props.onSubmit}>
            <div className='sm-input'>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='First Name' name='first_name' onChange={props.onChange}/>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='Last Name' name='last_name'   onChange={props.onChange}/>
            </div>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Email' name='email' onChange={props.onChange}/>
            {props.isEmailError&& Array.isArray(props.EmailError)&&(<ul style={{color:"red"}}>{props.EmailError.map((error,index)=>{
            return <li id ={`email-error${index}`}>{error}</li>
            })}</ul>)}
            {props.emError && <p style={{color: 'red'}}>{props.emError}</p>}

            
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Password' name='password'  onChange={props.onChange}/>
            {props.isPasswordError&& Array.isArray(props.PasswordError)&&(<ul style={{color:"red"}}>{props.PasswordError.map((error,index)=>{
            return <li id ={`password-error${index}`}>{error}</li>
            })}</ul>)}
            {props.passError && <p style={{color: 'red'}}>{props.passError}</p>}
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Position' name='role' onChange={props.onChange}/>
            
            <div className='form-btns'>
                <button className='button-size-input navy-bk gray-font'>Add</button>
                <Link to={`/compSuper/${props.id}`}>
                    <button className='button-size-input navy-bk gray-font'>Cancel</button>
                </Link>
            </div>

        </form>
    </div>
    </>
  )
}

export default CreateAccForm