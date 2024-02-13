import React from 'react'
import student from '../../static/Student.jpg'

function CardReportSuper() {
  return (
    <>
        <div className='card2 gray-bk centered-card'>
            <div className='uni-std-report'>
              <div className='uni-std-img-info'>
                <img src={student} className='uni-std-circle'/>
                <div className='uni-std-report-info'>
                  <span>Mohammad Saleh</span>
                  <span>CS</span>
                  <span>Trainee at Coders</span>
                </div>
              </div>
              
              <a href=''>
                Final Report
              </a>
            </div>
            
        </div>
    </>
  )
}

export default CardReportSuper