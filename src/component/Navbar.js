import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='nav-comp'>
    <NavLink to= '/' className={'not-clicked'}>Home</NavLink>
    <NavLink to='/About' className={'not-clicked'}>About Us</NavLink>
    <NavLink to='/SignIn' className={'not-clicked'} >Sign In</NavLink>
    <NavLink to='/SignUp' className={'not-clicked'}>Sign Up</NavLink>
    </div>
    </>
    )
}

export default Navbar