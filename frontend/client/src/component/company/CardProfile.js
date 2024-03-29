import React from 'react'
import img from '../../static/Compbk.png'
import img2 from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardProfile() {
  return (
    <>
     <div className='large-card gray-bk centered-card'>
        
        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={img} className='imgbk-size'/>
                <img src={img2} className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>

                        <div className='comp-profile-txt'>

                            <div className='txt-std-name'>
                                <span>Coders</span>
                                <span>3k Followers</span>
                                <span>Amman - Jordan</span>
                            </div>

                            <button className='comp-button bold'>
                                    Contact Us
                            </button>

                        </div>
                        <div className='comp-btn-container'>

                            <div className='std-btns'>
                                <Link to='/compEditProfile' >
                                    <button className='button-size-std navy-bk white-font'>
                                        Edit
                                    </button>
                                </Link>
                                <button className='button-size-std navy-bk white-font'>
                                    Log Out
                                </button>
                            </div>

                            <div>
                                <Link to='/compNewPost' >
                                    <button className='button-size-std navy-bk white-font'>
                                        Add Post
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    
                </div>
        </div>
    </div>
    </>
  )
}

export default CardProfile