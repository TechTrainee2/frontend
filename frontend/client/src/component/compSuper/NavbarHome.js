import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import img from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
function NavbarHome(props) {
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
        <NavLink to ='/CompSuperHome'  className='not-clicked'>
            <img className='nav-std-logo'  src={img}/>
        </NavLink>
        <input type="text" placeholder="Search.." className='search-std gray-bk 'onClick={handelOnClick}></input>
       
        <div className='icon-cont-company-nav'>
            <div className='icons'>
                
                <NavLink to = {`/CompSuperAcc/${props.id}`}  className='not-clicked'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#1c3150" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                    </svg>
                </NavLink>
                <NavLink to ={`/CompSuperAcc/${props.id}`}  className='not-clicked'>
                    <span>My Account</span>
                </NavLink>
            </div>

            <div className='icons'>
                <NavLink to ='/CompSuperReport' className='not-clicked'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path fill="#1c3150" d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/>
                    </svg>
                </NavLink>
                <NavLink to ='/CompSuperReport' className='not-clicked'>
                    <span>Report</span>
                </NavLink>
            </div>
        </div>
        <div className={isModal?'show': 'hidden'} >
            <div className='modal-bk' onClick={handelOnClickX}></div>
            <div className='search-box-2nav-comp'>
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

export default NavbarHome