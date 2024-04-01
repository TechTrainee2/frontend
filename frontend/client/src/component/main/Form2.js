import React from 'react'


function Form2(props) {

  return (
    <>
    <div className='form2'>
      <form className='imd-form' onSubmit={props.onSubmit}> 
        <div className='form-input'>
          <input type='text' placeholder='Name' name='name' onChange={props.onChange}/>
          <input type='text' placeholder='Email' name='email' onChange={props.onChange}/>
          {props.isEmailError&&(<ul style={{color:"red"}}>{props.EmailError.map((error,index)=>{
            return <li id ={`email-error${index}`}>{error}</li>
          })}</ul>)}
          <input type='text' placeholder='Organization ID' name='comp_id' onChange={props.onChange}/>
          <input type='password' placeholder='Password' name='password' onChange={props.onChange}/>
          {props.isPasswordError&&(<ul style={{color:"red"}}>{props.PasswordError.map((error,index)=>{
            return <li id ={`password-error${index}`}>{error}</li>
          })}</ul>)}
          <button className='button-size navy-bk white-font super'>
            Sign Up
          </button>
        </div>

      </form>

      <div className='form-link '>
        <span>Already have an account?</span>
        <a href='/SignIn' className='under-line'>Sign In</a>
      </div>
    </div>
  </>
  )
}

export default Form2