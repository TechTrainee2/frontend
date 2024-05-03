import React, { useState } from 'react'
import img from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
function NavbarReg() {
  return (
    <>
    <div className='nav-std'>
        <NavLink to ='/RegHome'  className='not-clicked'>
            <img className='nav-std-logo'  src={img}/>
        </NavLink>
    </div>
    </>
  )
}

export default NavbarReg