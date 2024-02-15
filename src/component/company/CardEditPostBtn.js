import React from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardEditPostBtn() {
  return (
    <>
        <div className='card1 gray-bk centered-card'>
          <div className='card1-comp' >
            <img src={img} className='company-img' />

            

            <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>

                <div className='comp-edit-container'>

                    <span className='bold'>
                    Internship Front End Developer
                    </span>

                    <div className='comp-btns'>
                        <Link to='/compEditPost'>
                            <button className='comp-button-size navy-bk white-font'>
                                Edit Post
                            </button>
                        </Link>
                    </div>

                </div>

                <div>
                  <span>Coders</span>
                  <span className='remote-btn-std'>Remote</span>
                  <p>We are offering a training opertinity for (3) students .........</p>
                </div>

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
    </>
  )
}

export default CardEditPostBtn