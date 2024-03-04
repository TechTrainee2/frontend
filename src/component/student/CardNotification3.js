import React from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardNotification3() {
  return (
    <>
    <div className='std-notification-container'>
        <div className='blue-circle'></div>

        <Link to='/stdPost' className='card1 gray-bk centered-card'>
          <div className='card1-comp-acc-post ' >
            <img src={img} className='large-img' />

            <div className='std-comp-post'>
                <span className='bold super'>
                  New post
                </span>

                <span className=' super'>
                  Internship Front End Developer
                </span>

                <div className='std-comp-post-place super'>
                  <span>Coders</span>
                  <span className='remote-btn-std'>Remote</span>
                </div>

                <div className='std-btns'>
                </div>

            </div>
          </div>
        </Link>
    </div>
    </>
  )
}

export default CardNotification3