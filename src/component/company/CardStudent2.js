import React from 'react'
import student from '../../static/Student2.jpg'
import '../../App.css'
import '../../malak.css'


function CardStudent2() {
  return (
    <>
        <div className='card2 gray-bk centered-card'>
            <div className='super-srd-card'>

                <div className='super-std-img'>
                    <img src={student} className='uni-std-circle'/>
                    <span className='bold'>Zaid Majed</span>
                </div>
                <div className='super-std-note'>
                    <span>
                        <div className='note-circle navy-bk'></div>
                    </span>
                    <p>Has applied to your training offer for the react.........  </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardStudent2