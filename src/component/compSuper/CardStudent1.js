import React from 'react'
import student from '../../static/Student.jpg'
import '../../App.css'
import '../../malak.css'

function CardStudent1() {
  return (
    <>
        <div className='card2 gray-bk centered-card'>

            <div className='compsuper-std-card-container'>

                <div className='compsuper-std-img'>
                    <img src={student} className='large-img'/>
                    <span className='font-super bold'>Mohammad Saleh</span>
                </div>
                <div className='compsuper-std-note'>
                    <span>
                        <div className='note-circle navy-bk'></div>
                    </span>
                    <p className='font-super'>Has been selected as a trainee under your supervision </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardStudent1