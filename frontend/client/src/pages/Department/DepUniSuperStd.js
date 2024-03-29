import React, { useState } from 'react'
import img from '../../static/prof.png'
import DepUniAssignCard from '../../component/department/DepUniAssignCard'
import NavbarHome from '../../component/department/NavbarHome'
import student from '../../static/Student.jpg'

function DepUniSuperStd() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  return (
    <>
        <NavbarHome/>
        <div  className='dep-uni-sup-container'>
          <div className='uni-super-assign'>
            <div className='uni-std-img-info'>
              <img src={img} className='company-img2'/>
              <div className='uni-std-report-info super'>
                <span>Kamal Ibrahim</span>
                <span>CS Professor</span>
              </div>
            </div>
            <button className='button-size navy-bk white-font font-med' onClick={handelOnClick}>Assign student</button>
          </div>
          
          <div className='dep-uni-std-span-card'>
            <span className='bold assign-padding-span super'>Current Student</span>
            <DepUniAssignCard/>
          </div>
          <div className={isModal?'show': 'hidden'} >
                  <div className='modal-bk' onClick={handelOnClickX}></div> 
                  <div className='search-box-left-mini-50 '>
                  <input type="text" placeholder="Search Student Report" className='comp-search-assign-btn gray-bk ' onClick={handelOnClick}/>
                      <div className='assign-card gray-bk'>
                          <div className='search-img'>
                              <img src={student} className='uni-std-circle'/>
                              <div className='compsuper-std-name'>
                                  <span >Mohammad Saleh</span>
                                  <span >CS</span>
                              </div>
                              <button className='comp-assign-search-button-size navy-bk white-font font-med'>Assign</button>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </>
  )
}

export default DepUniSuperStd