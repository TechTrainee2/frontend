import React from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardEditPostBtn() {
  return (
    <>
      <div className='card1 gray-bk centered-card'>
        <div className='card1-comp-acc-post ' >
          <img src={img} className='large-img' />

            <div className='std-comp-post'>
                <div>
                <div className='comp-btns'>
                <span className=' super'>
                  Internship Front End Developer
                </span>
                        <Link to='/compEditPost'>
                            <button className='comp-button-size navy-bk white-font super'>
                                Edit Post
                            </button>
                        </Link>
                    </div>
                </div>
                
      

                <div className='comp-post-name-place super'>
                  <span>Coders</span>
                  <span className='remote-btn-std'>Remote</span>
                </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default CardEditPostBtn