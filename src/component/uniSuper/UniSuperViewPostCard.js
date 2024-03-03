import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import company from '../../static/company.jpg'

import { Link } from 'react-router-dom'

function UniSuperViewPostCard() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  return (
    <>
     <div className="card2 gray-bk centered-card margin-bottom">
      
      <div className="supr-std-app">

        <div className="supr-std-app-img">
          <img src={student} className="comp-std-circle" />
          <div>
            <span className="bold">Mohammad saleh </span>
            <p> Application has been accepted to:</p>
          </div>
        </div>

        <div className="app-button">
          <button className="button-size-std navy-bk white-font" >
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
  )
}

export default UniSuperViewPostCard