import React from 'react'
import img from '../../static/bk2.png'
import Navbar from '../../component/main/Navbar'
import Form from '../../component/main/Form'

function SignIn() {
  return (
    <>
    <Navbar/>
    <div >
        <span className='bold welcome'>Welcome Back</span>
     <img src={img} className='bk1'/>
     </div>
      <Form/> 
    </>
  )
}

export default SignIn