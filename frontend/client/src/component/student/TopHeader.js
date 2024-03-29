import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../static/logo.png'

function TopHeader() {
  return (
    <>
    <div className='top-header'>
        <NavLink to ='/stdHome'  className='not-clicked'>
            <img className='nav-std-logo' src={img}/>
        </NavLink>
        <NavLink to ='/searchphone'>
          <input type="text" placeholder="Search.." className='search-std gray-bk '/>
        </NavLink>
        </div>
    </>
  )
}

export default TopHeader