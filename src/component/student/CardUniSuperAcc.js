import React from 'react'
import img from '../../static/profbk.png'
import img2 from '../../static/prof.png'
import { Link } from 'react-router-dom'

function CardUniSuperAcc() {
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

                    </div>
                </div>
        </div>
    </div>

    <div className='card2 gray-bk centered-card'>
        <div className='contact-comp'>
            <span className='bold'>Contact Info</span>
            <div className='std-info'>

            <div>
                <span className='std-span-info'>Phone Number</span>
                <span>0791234567</span>
            </div>

            <div>
                <span className='std-span-info'>Email</span>
                <span>kamal.b@ju.edu.jo</span>
            </div>

            <div>
                <span className='std-span-info'>Address</span>
                <span>Jordan - Amman</span>
            </div>
            
        </div>
        </div>
    </div>
    
    </>
  )
}

export default CardUniSuperAcc