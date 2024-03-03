import React, { useState } from 'react'
import student from'../../static/Student.jpg'
import { Link } from 'react-router-dom'

function CompStdCard() {
    let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }
  return (
    <>
        <div className='card2 gray-bk centered-card' >
            <div className='std-info-svg'>
                <div className='uni-std-img-info'>
                    <img src={student} className='uni-std-circle'/>
                    <div className='uni-std-report-info'>
                        <span>Mohammad Saleh</span>
                        <span>CS</span>
                       
                    </div>
                     
                </div>
                    <Link to=''>Ahmad</Link>
                    
            </div>
            <div className='svg-txt'>
                    <svg width={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClick}>
                        <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                    <span  onClick={handelOnClick}>delete</span>
                </div>  
                <div className={isModal?'show': 'hidden'} >
                    <div className='modal-bk'></div>
                    <div className='apply-box'>
                        <div className='apply-box-comp'>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                            <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>

                            <span className='bold navy-font'>Are you sure you want to delete?</span>

                            <div className='apply-box-btns'>
                                <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                                <button className='button-size-std navy-bk white-font'>Yes</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
    </>
  )
}

export default CompStdCard