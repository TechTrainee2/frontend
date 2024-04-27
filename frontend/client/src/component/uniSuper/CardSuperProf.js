import React from 'react'
import img from '../../static/profbk.png'
import img2 from '../../static/prof.png'
import { Link } from 'react-router-dom'

function CardSuperProf(props) {
  return (
    <>
     <div className='card2 gray-bk centered-card'>
        
        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={props.profile.img_bk} className='imgbk-size'/>
                <img src={props.profile.img}  className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>
                        <div className='txt-std-name'>
                            <span>{props.extra.first_name} {props.extra.last_name} </span>
                        
                        </div>

                        {props.isSameUser && (
                        <div className='std-unisuper-btns-m'>
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
                         )}

                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardSuperProf