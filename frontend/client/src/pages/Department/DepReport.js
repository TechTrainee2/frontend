import React, { useState } from 'react'
import DepStdReportCard from '../../component/department/DepStdReportCard'
import student from '../../static/Student.jpg'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'

function DepReport() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  return (
    <>
        <NavbarHomeDep/>
         <div className='centerd-comp'>
      <div className='uni-super-title-report'>
        <span className='font-super bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='uni-super-search-report gray-bk ' onClick={handelOnClick}/>
      </div>
      <DepStdReportCard/>
      <div className={isModal?'show': 'hidden'} >
             <div className='modal-no-bk' onClick={handelOnClickX}></div> 
            <div className='search-box-left-mini'>
                <div className='search-card gray-bk'>
                    <div className='search-img'>
                        <img src={student} className='uni-std-circle'/>
                        <div className='compsuper-std-name font-med'>
                            <span>Mohammad Saleh</span>
                            <span >CS</span>
                        </div>
                        <span className='under-line font-med'>Report</span>
                     </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DepReport