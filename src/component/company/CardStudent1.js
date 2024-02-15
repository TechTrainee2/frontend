import React from 'react'
import student from '../../static/Student.jpg'
import '../../App.css'
import '../../malak.css'
import { Link } from 'react-router-dom'

function CardStudent1() {
  return (
    <>
    <Link to='/compStdApplication' className='not-clicked' >
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
                    <p>Has applied to your training offer for the react.........  </p>
                </div>
            </div>
        </div>
    </Link>
    </>
  )
}

export default CardStudent1