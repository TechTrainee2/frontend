import React from 'react'
import Button from '../main/Button'

function Form2() {
  return (
    <>
    <div className='form'>
    <form className='imd-form'> 
        <div className='form-input'>
            <label>
            <input type='file' name='img' className='display-img'/>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#1c3150" d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
        <div className='gray-circle'></div>
        </label>
            <div>
        </div>
        <input type='text' placeholder='Name' name='name'/>
        <input type='text' placeholder='Email' name='email'/>
        <input type='password' placeholder='Password' name='password'/>
        <Button text="Sign In" color="navy" txtColor='white'/>
        </div>
       
    </form>
    <div className='form-link'>
    <a href='/SignIn'>Sign In</a>
    </div>
    </div>
    </>
  )
}

export default Form2