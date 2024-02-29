import React from 'react'
import student from '../../static/Student.jpg'

function DepStdCard() {
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
                    <span>Trainee at Coders</span>
            </div>
        </div>

    </>
  )
}

export default DepStdCard