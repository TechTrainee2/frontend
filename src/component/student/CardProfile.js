import React from 'react'
import img from '../../static/Stdbk.jpg'
import img2 from '../../static/Student.jpg'
import { Link } from 'react-router-dom'

function CardProfile() {
  return (
    <>
    <span className='centered-title bold'>My Account</span>
    <div className='card2 gray-bk centered-card'>
        

        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={img} className='imgbk-size'/>
                <img src={img2} className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>

                        <div className='txt-std-name'>
                            <span>Mohammad Saleh</span>
                            <span>Computer Science</span>
                            <span>Dr. Ahmad</span>
                        </div>

                        <div className='std-btns'>
                            <Link to='/stdEdit' >
                                <button className='button-size-std navy-bk white-font'>
                                    Edit
                                </button>
                            </Link>
                            <button className='button-size-std navy-bk white-font'>
                                Log Out
                            </button>
                        </div>

                    </div>

                        <p>I’m a 4th year Computer Science student at the University of Jordan</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardProfile