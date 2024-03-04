import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'

function ApplicationStdCard() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  let [isReject,setIsReject]=useState(false) 
  let handelOnClickReject =()=> {
      setIsReject(true)
  }
  let handelOnClickXReject =()=> {
      setIsReject(false)
  }
  return (
    <>
     <div className='card-std-assign gray-bk centered-card' >
          <div className='uni-sup-std-info-svg'>
              <div className='uni-std-img-info'>
                  <img src={student} className='uni-std-circle'/>
                  <div className='uni-std-report-info'>
                      <span>Mohammad Saleh</span>
                      <span>CS</span>
                      
                  </div>
                    
              </div>
              <div className='btn-link-container'>
                <Link to='/compStdApplication' className='under-line txt-center'>
                  Student Application
                </Link>
                <div className='comp-app-btn-container '>
                   <button className='button-size navy-bk white-font' onClick={handelOnClick} >Accept</button>
                   <button className='button-size navy-bk white-font' onClick={handelOnClickReject} >Reject</button>
                </div>
              </div>
        
        </div>
        <div className={isModal?'show': 'hidden'} >
          <div className='modal-bk'></div>
            <div className='apply-box'>
                <div className='apply-box-comp'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                    <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>

                    <span className='bold navy-font'>Are you sure you want to Accept?</span>

                    <div className='apply-box-btns'>
                        <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                        <button className='button-size-std navy-bk white-font'>Yes</button>
                    </div>
                </div>

            </div>
        </div>
        <div className={isReject?'show': 'hidden'} >
        <div className='modal-bk'></div>
            <div className='apply-box'>
                <div className='apply-box-comp'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickXReject}>
                    <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>

                    <span className='bold navy-font'>Are you sure you want to Reject?</span>

                    <div className='apply-box-btns'>
                        <button className='button-size-std gray-bk navy-font' onClick={handelOnClickXReject}>No</button>
                        <button className='button-size-std navy-bk white-font'>Yes</button>
                    </div>
                </div>

            </div>
        </div>

          </div>
          
      
    </>
  )
}

export default ApplicationStdCard