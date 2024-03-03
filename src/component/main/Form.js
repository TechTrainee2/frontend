import React from 'react'


function Form() {
  return (
    <>
    <div className='form'>
      <form>
          <div className='form-input'>
            <span className='sign-in-span bold'>Sign In</span>
            <input type='text' placeholder='Email' name='email'/>
            <input type='password' placeholder='Password' name='password'/>
            <button className='button-size navy-bk white-font'>
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