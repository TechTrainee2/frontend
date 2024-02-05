import React from 'react'
import Button from './Button'

function Form() {
  return (
    <>
    <div className='form'>
    <form>
        <div className='form-input'>
        <input type='text' placeholder='Email' name='email'/>
        <input type='password' placeholder='Password' name='password'/>
        <Button text="Sign In" color="navy" txtColor='white'/>
        </div>
    </form>
    <div className='form-link'>
    <a href=''>Forgot Password?</a>
    <a href=''>Don't have an account?</a>
    <a href=''>Sign Up</a>
    </div>
    </div>
    </>
  )
}

export default Form