import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import img from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  return (
    <>
    <div className='nav-std'>
        <NavLink to ='/RegHome'  className='not-clicked'>
            <img className='nav-std-logo'  src={img}/>
        </NavLink>
        <input type="text" placeholder="Search.." className='search-std gray-bk ' onClick={handelOnClick}></input>
       
        <div className='icon-cont'>
            <div className='icons'>
                
            </div>
        </div>
        <div className={isModal?'show': 'hidden'} >
            <div className='modal-bk' onClick={handelOnClickX}></div>
            <div className='search-box-none-nav-comp'>
                <div className='search-card gray-bk'>
                    <div className='search-img'>
                        <img src={student} className='uni-std-circle'/>
                        <div className='compsuper-std-name'>
                            <span >Mohammad Saleh</span>
                            <span>CS</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar