import React from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'

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
              <div className='links-uni'>
                <Link to='stdWeeklyReports'>
                  Reports
                </Link>
                <Link to=''>
                  Supervisor
                </Link>
              </div>
            </div>
            
        </div>
    </>
  )
}

export default CardReportSuper