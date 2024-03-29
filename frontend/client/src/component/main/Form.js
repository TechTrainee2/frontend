import React from 'react'


function Form(props) {
  return (
    <>
    <div className='form1'>
      <form onSubmit={props.onSubmit}>
          <div className='form-input'>
            <span className='sign-in-span bold super'>Sign In</span>
            <input 
            type='email'
						name='email'
						onChange={props.onChange}
						value={props.email}
						required/>
            <input 
            type='password'
						name='password'
						onChange={props.onChange}
						value={props.password}
						required/>
            <button className='button-size navy-bk white-font super'>
                Sign In
            </button>
          </div>

      </form>
      <div className='form-link'>
        <span>Don't have an account?</span>
        <a href='/SignUp' className='under-line'>Sign Up</a>
      </div>
  </div>
    </>
  )
}

export default Form