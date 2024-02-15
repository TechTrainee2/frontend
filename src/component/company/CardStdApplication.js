import React, { useState } from 'react'
import student from "../../static/Student.jpg";
import company from "../../static/company.jpg";


function CardStdApplication() {
  let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }
  return (
    <>
      <div className="card2 gray-bk centered-card">
      <div className={isModal?'show': 'hidden'} >
          <div className='modal-bk'></div>
          <div className='apply-box'>
              <div className='apply-box-comp'>
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                  <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>

                  <span className='bold navy-font'>Are you sure u want to Apply?</span>

                  <div className='apply-box-btns'>
                      <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                      <button className='button-size-std navy-bk white-font'>Yes</button>
                  </div>
              </div>

          </div>
        </div>
        <div className="supr-std-app">

          <div className="supr-std-app-img">
            <img src={student} className="comp-std-circle" />
            <div>
              <span className="bold">Mohammad saleh </span>
              <p>Has applied to the following training program:</p>
            </div>
          </div>

          <div className="app-button">
            <button className="button-size-std navy-bk white-font" onClick={handelOnClick}>
              Accept
            </button>
            <button className="button-size-std navy-bk white-font">
              Reject
            </button>
          </div>
          <div className="comp-company-post">

            <div className="company-post-img">
              <span>
                <img src= {company} className="comp-company-img"/>
              </span>
              <span>Coders</span>
            </div>

            <div className="app-p">
              <p>
                We are offering a training opportunity for (3) students on react and react native 
              </p>
              <span>About training:</span>
              <p>
                you are going to learn react and react native <br/>
                and how to code it using functions and hooks<br/>
                and you will take pre course for designing  
              </p>
              <span>Qualification</span>
              <p>-know html and css <br/>-know js </p>
            </div>
          </div>
        </div>
 
      </div>
    </>
  );
}

export default CardStdApplication;
