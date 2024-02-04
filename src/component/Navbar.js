import React from 'react'

function Navbar() {
  return (
    <>
    <div className='nav-comp'>
    <a href='/'>Home</a>
    <a href='/About' onClick={()=>{

    }}>About Us</a>
    <a href='/SignIn' >Sign In</a>
    <a href='/SignUp'>Sign Up</a>
    </div>
    </>
    )
}

export default Navbar