import React from 'react'
import img from '../../static/profbk.png'
import img2 from '../../static/CompSuper.jpg'
import { Link } from 'react-router-dom'

function CardProfile() {
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

                        <div className='txt-compsuper-name'>
                            <span>Ahmad</span>
                        </div>

                        <div className='std-btns'>
                            <Link to='/CompSuperEditAcc' >
                                <button className='button-size-std navy-bk white-font'>
                                    Edit
                                </button>
                            </Link>
                            <button className='button-size-std navy-bk white-font'>
                                Log Out
                            </button>
                        </div>

                    </div>

                        <p>Works at Coders as senior react developer</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardProfile