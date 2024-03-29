import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../static/logo.png'

function EditHeader() {
  return (
    <>
    <div className='top-header'>
        <NavLink to ='/stdHome'  className='not-clicked'>
            <img className='nav-std-logo' src={img}/>
        </NavLink>
        <span className='centered-nav-title bold '>Edit Account</span>
        </div>
    </>
  )
}

export default EditHeader