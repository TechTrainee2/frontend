import React from 'react'
import img from '../static/bk3.png'
import Navbar from '../component/Navbar'
import Form from '../component/Form2'

function SignUp() {
  return (
    <>
    <Navbar/>
    <div >
        <span className='bold gray-font create-acc'>Create Account</span>
     <img src={img} className='bk1'/>
     </div>

        <Form/> 
    </>
  )
}

export default SignUp