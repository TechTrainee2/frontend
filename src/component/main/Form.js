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
        <a href=''>Forgot Password?</a>
        <a href=''>Don't have an account?</a>
        <a href='/SignIn'>Sign Up</a>
      </div>
  </div>
    </>
  )
}

export default Form