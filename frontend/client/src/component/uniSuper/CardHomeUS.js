import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'
import { NavLink } from 'react-router-dom'
function CardHomeUS() {
  return (
    <>
       
    <div className='card-uni-super-home gray-bk centered-card'>
        <div className='uni-super-std-card'>
            <div className='super-std-img'>
                <img src={student} className='uni-std-circle'/>
                <div className='compsuper-std-name'>
                    <span >Mohammad Saleh</span>
                    <span>CS</span>
                </div>
            </div>
        <div className='uni-super-std-btn'>
            <NavLink to =''  className='not-clicked'>
                <span className='compsuper-underline'>Trainee at coders</span>
            </NavLink>
            <NavLink to =''  className='not-clicked'>
                <span className='compsuper-underline'>Supervisor</span>
            </NavLink>
        </div>
    </div>
    </div>


  
    </>
  )
}

export default CardHomeUS