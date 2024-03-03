import React from 'react'
import img from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
function SuperNotificationCard() {
  return (
    <>
        <div className='std-notification-container'>
        <div className='blue-circle'></div>

        <Link to='/UniSuperViewPost' className='card1 gray-bk centered-card'>
          <div className='card1-comp' >
            <img src={img} className='company-img' />

            <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>

                <div>
                  <span className='std-new-post'>Mohammad Saleh</span>
                </div> 

                <span>Has been accepted by Coders for their training....</span>
                
                <div className='std-btns'>
                    
                      
                </div>

            </div>
            </div>

        
        </Link>
        
    </div>
    </>
  )
}

export default SuperNotificationCard