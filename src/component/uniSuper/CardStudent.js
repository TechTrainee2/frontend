import React from 'react'
import student from '../../static/Student.jpg'
import '../../App.css'
import '../../malak.css'


function CardContact() {
  return (
    <>
        <div className='card2 gray-bk centered-card'>
            <div className='super-srd-card'>

                <div className='super-std-img'>
                    <img src={student} className='uni-std-circle'/>
                    <span className='bold'>Mohammad Saleh</span>
                </div>
                <div className='super-std-note'>
                    <span>
                        <div className='note-circle navy-bk'></div>
                    </span>
                    <p>His application to Coders  has been accepted ...... </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardContact