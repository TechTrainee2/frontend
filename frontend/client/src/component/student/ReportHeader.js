import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../static/logo.png'

function ReportHeader() {
  return (
    <>
    <div className='top-header'>
        <NavLink to ='/stdHome'  className='not-clicked'>
            <img className='nav-std-logo' src={img}/>
        </NavLink>
        <span className='centered-nav-title bold'>Reports</span>
        </div>
    </>
  )
}

export default ReportHeader