import React from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardNotification3() {
  return (
    <>
    <div className='std-notification-container'>
        <div className='blue-circle'></div>

        <div className='card1 gray-bk centered-card'>
          <div className='card1-comp' >
            <img src={img} className='company-img' />

            <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>

                <span className='std-new-post bold'>
                  New Post
                </span>

                <div>
                  <span className='std-new-post'>Coders</span>
                </div> 

                <span>Internship Front End Developer</span>
                
                <div className='std-btns'>
                    <Link to='/stdPost'>
                        <button className='button-size-std navy-bk white-font'>
                            Show More
                        </button>
                    </Link>
                </div>

            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default CardNotification3