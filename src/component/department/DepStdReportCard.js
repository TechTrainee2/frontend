import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'
import { NavLink } from 'react-router-dom'


function DepStdReportCard() {
  return (
    <>
    

    <div className='compsuper-report'>
        <span className='report-title bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='search-dep-report gray-bk '></input>
    </div>


    <div className='card2 gray-bk centered-card'>
        <div className='dep-info-card-report'>
            <div className='super-std-img'>
                <img src={student} className='uni-std-circle'/>
                <div className='compsuper-std-name'>
                    <span >Mohammad Saleh</span>
                    <span>CS</span>
                </div>
            </div>
                <NavLink to ='/DepStdFinalReport'  className='not-clicked'>
                    <span className='compsuper-underline'>Final Report</span>
                </NavLink>
        </div>
            
    </div>

    <div className='card2 gray-bk centered-card'>
        <div className='dep-info-card-report'>
            <div className='super-std-img'>
                <img src={student2} className='uni-std-circle'/>
                <div className='compsuper-std-name'>
                    <span >Zaid Majed</span>
                    <span>CS</span>
                </div>
            </div>
            <NavLink to ='/depStdFinalReport'  className='not-clicked'>
                <span className='compsuper-underline'>Final Report</span>
            </NavLink>
        </div>
    </div>

    </>
  )
}

export default DepStdReportCard