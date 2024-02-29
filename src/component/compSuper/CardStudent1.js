import React from 'react'
import student from '../../static/Student.jpg'
import '../../App.css'
import '../../malak.css'

function CardStudent1() {
  return (
    <>
        <div className='card3 gray-bk centered-card'>

            <div className='compsuper-srd-card'>

                <div className='compsuper-std-img'>
                    <img src={student} className='uni-std-circle'/>
                    <span className='bold'>Mohammad Saleh</span>
                </div>
                <div className='compsuper-std-note'>
                    <span>
                        <div className='note-circle navy-bk'></div>
                    </span>
                    <p>Has been assigned as a trainee ..... </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardStudent1