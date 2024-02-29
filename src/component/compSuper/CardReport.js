import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'
import { NavLink } from 'react-router-dom'


function CardReport() {
  return (
    <>
    <div className='compsuper-report'>
        <span className='centered-title bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='search-compsuper-report gray-bk '></input>
    </div>


    <div className='card2 gray-bk centered-card'>
        <div className='super-std-card'>
            <div className='super-std-img'>
                <img src={student} className='uni-std-circle'/>
                <div className='compsuper-std-name'>
                    <span >Mohammad Saleh</span>
                    <span>CS</span>
                </div>
            </div>
        </div>
            <NavLink to ='/CompSuperStdReport'  className='not-clicked'>
                <span className='compsuper-underline'>Report</span>
            </NavLink>
    </div>

    <div className='card2 gray-bk centered-card'>
        <div className='super-std-card'>
            <div className='super-std-img'>
                <img src={student2} className='uni-std-circle'/>
                <div className='compsuper-std-name'>
                    <span >Zaid Majed</span>
                    <span>CS</span>
                </div>
            </div>
        </div>
            <NavLink to ='/'  className='not-clicked'>
                <span className='compsuper-underline'>Report</span>
            </NavLink>
    </div>

    </>
  )
}

export default CardReport