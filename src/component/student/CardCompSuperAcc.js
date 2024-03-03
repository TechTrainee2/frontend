import React from 'react'
import img from '../../static/profbk.png'
import img2 from '../../static/CompSuper.jpg'

function CardCompSuperAcc() {
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

                    </div>

                        <p>Works at Coders as senior react developer</p>
                </div>
        </div>
    </div>

    <div className='card2 gray-bk centered-card'>
            <div className='contact-comp-super'>
                <span className='bold'>Contact Info</span>
                <div className='std-info'>

                <div>
                    <span className='std-span-info'>Phone Number</span>
                    <span>0791234567</span>
                </div>

                <div>
                    <span className='std-span-info'>Email</span>
                    <span>Ahmad@gmail.com</span>
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

export default CardCompSuperAcc