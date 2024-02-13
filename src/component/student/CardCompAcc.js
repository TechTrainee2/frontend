import React from 'react'
import img from '../../static/Compbk.png'
import img2 from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardCompAcc() {
  return (
    <>
     <div className='card2 gray-bk centered-card'>
        
        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={img} className='imgbk-size'/>
                <img src={img2} className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>

                        <div className='txt-std-name'>
                            <span>Coders</span>
                            <span>3k Followers</span>
                            <span>Amman - Jordan</span>
                        </div>

                        <div className='std-btns'>
                            <Link to='/stdEdit' >
                                <button className='button-size-std navy-bk white-font'>
                                    Follow
                                </button>
                            </Link>
                        </div>

                    </div>

                        
                    <button className='button-size-std2 bold'>
                                Contact Us
                            </button>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardCompAcc