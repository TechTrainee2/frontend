import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import img from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
function NavbarHomeDep() {
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
        <NavLink to ='/depHome'  className='not-clicked'>
            <img className='nav-std-logo'  src={img}/>
        </NavLink>
        <input type="text" placeholder="Search.." className='search-std gray-bk ' onClick={handelOnClick}></input>
       
        <div className='icon-cont'>
            <div className='icons'>
                
            </div>

            <div className='icons'>
                <NavLink to ='/depReport' className='not-clicked'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{width:'26px'}}>
                        <path fill="#1c3150" d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/>
                    </svg>
                </NavLink>
                <NavLink to ='/depReport' className='not-clicked'>
                    <span>Report</span>
                </NavLink>
            </div>

            <div className='icons'>
                <NavLink to ='/depApplication' className='not-clicked'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/>
                    </svg>
                </NavLink>
                <NavLink to ='/depApplication' className='not-clicked'>
                    <span>Applications</span>
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
                        <span className='under-line'>Trainee at Coders</span>
                     </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default NavbarHomeDep