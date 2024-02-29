import React from 'react'
import { Link } from 'react-router-dom'

function DepNotificationCard() {
  return (
   
       <>
    <div className='std-notification-container'>
    <div className='blue-circle'></div>
     <Link to='/depReqApproval' className='card2 gray-bk centered-card '>
        <div className='std-notification-comp'>

            <p>Dr. Kamal has approved on Mohammad saleh  application for Internship Front End Developer at Coders </p>

        </div>
    </Link>
    </div>
    </>
    
  )
}

export default DepNotificationCard