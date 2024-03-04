import React, { useState } from 'react'
import img from '../../static/Compbk.png'
import img2 from '../../static/company.png'
import mail from '../../static/gmail.png'
import linkedin from '../../static/linkedin.png'
import { Link } from 'react-router-dom'

    
function CardCompAcc() {
    const recipientEmail = 'Coders@gmail.com';
    
    const mailtoLink = `mailto:${recipientEmail}`;



    let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }
  return (
    <>
     <div className='large-card gray-bk centered-card'>
        
        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={img} className='imgbk-size'/>
                <img src={img2} className='std-circle std-profile'/>
            </div>
                <div className='std-company-txt-left'>

                        <div className='txt-std-company-name'>
                            <span>Coders</span>
                            <span>Amman - Jordan</span>
                        </div>


                    <div className={isModal?'show': 'hidden'} >
                        <div className='modal-bk'></div>
                        <div className='contact-box'>
                            <div className='contact-box-comp'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>

                                <span className='bold navy-font'>Contact Info</span>

                                <div className='contact-box-margin'>
                                    <div className='contact-info-box'>
                                        <img src={mail} className='contact-icons'/>
                                        <span>
                                            <a href={mailtoLink}>Coders@gmail.com</a>
                                        </span>
                                    </div>

                                    <div className='contact-info-box'>
                                        <img src={linkedin} className='contact-icons'/>
                                        <span>Coders</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                        <button className='std-contactus-btn bold' onClick={handelOnClick}>
                                    Contact Us
                        </button>
                     
                </div>
        </div>
    </div>
    </>
  )
};
export default CardCompAcc