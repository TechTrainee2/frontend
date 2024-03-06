import React from 'react'
import { Link } from 'react-router-dom'

function DepNotificationCardForm() {
  return (
   
       <>
    <div className='std-notification-container'>
   
     <div className='large-card gray-bk centered-card '>
      <div>

        <div className='std-notification-comp'>

            <p>Dr. Kamal has approved on &nbsp;
                <Link to='/' className='under-line'>Mohammad saleh </Link>
                  application for &nbsp;
                  <Link to=''className='under-line'>Internship Front End Developer</Link> 
                  &nbsp;at &nbsp; 
                  <Link className='under-line'>Coders</Link> 
            </p>

        </div>
        <div className='button-container'>
          <button className='button-size navy-bk white-font font-med'>Accpet</button>
          <button className='button-size navy-bk white-font font-med'>Reject</button>
        </div>
      </div>

    </div>
    </div>
    </>
    
  )
}

export default DepNotificationCardForm