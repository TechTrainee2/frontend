import React from 'react'
import img from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='nav-std'>
        <NavLink to ='/RegHome'  className='not-clicked'>
            <img src={img}/>
        </NavLink>
        <input type="text" placeholder="Search.." className='search-std gray-bk '></input>
       
        <div className='icon-cont'>
            <div className='icons'>
                
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar