import React from 'react'
import { Link } from 'react-router-dom'

function DepNotificationCard() {
  return (
   
       <>
       <div className='std-notification-container'>
        <div className='blue-circle'></div>

        <Link to='/depReqApproval' className='card-uni-super-notification gray-bk uni-super-centered-card'>
          <div className='card1-comp' >
          <p className='super'>Dr. Kamal has approved on Mohammad saleh  application for Internship Front End Developer at Coders </p>
              </div>
        </Link>
        </div>
    </>
    
  )
}

export default DepNotificationCard