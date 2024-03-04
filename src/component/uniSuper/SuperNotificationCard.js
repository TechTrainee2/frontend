import React from 'react'
import img from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
function SuperNotificationCard() {
  return (
    <>
        <div className='std-notification-container'>
        <div className='blue-circle'></div>

        <Link to='/UniSuperViewPost' className='card-uni-super-notification gray-bk uni-super-centered-card'>
          <div className='card1-comp' >
            <div className='uni-super-std-notification'>
              <img src={img} className='company-img' />
              <span className='std-new-post'>Mohammad Saleh</span>
            </div>

    
              
              <span className='uni-super-notification-detail super'>Has been accepted by Coders for their training....</span>
              </div>
        </Link>
        </div>
    </>
  )
}

export default SuperNotificationCard