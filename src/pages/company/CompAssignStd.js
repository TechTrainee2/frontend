import React, { useState } from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import compSuper from '../../static/CompSuper.jpg'
import CompAssignCard from '../../component/company/CompAssignCard'
import student from '../../static/Student.jpg'

function CompAssignStd() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  return (
    <>
        <NavbarMain/>
        <div  className='dep-uni-sup-container'>
          <div className='uni-super-assign'>
            <div className='uni-std-img-info'>
              <img src={compSuper} className='company-img'/>
              <div className='uni-std-report-info'>
                <span className='super'>Ahmad</span>
              </div>
            </div>
            <button className='comp-assign-button-size navy-bk white-font' onClick={handelOnClick}>Assign student</button>
          </div>
          
          <div className='dep-uni-std-span-card'>
            <span className='bold assign-padding-span'>Current Student</span>
            <CompAssignCard/>
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

export default CompAssignStd