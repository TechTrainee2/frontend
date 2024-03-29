import React from 'react'
import img from '../../static/profbk.png'
import img2 from '../../static/prof.png'
import { Link } from 'react-router-dom'

function CardSuperProf() {
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
                            <span>Kamal </span>
                            <p >Works at the University of Jordan in the Computer Science department </p>
                        </div>

                        <div className='std-btns-m'>
                            <Link to='/SuperEdit' >
                                <button className='button-size-std navy-bk white-font'>
                                    Edit
                                </button>
                            </Link >
                            <Link to ='/'>
                                <button className='button-size-std navy-bk white-font'>
                                    Log Out
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

export default CardSuperProf