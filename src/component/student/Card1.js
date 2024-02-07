import React from 'react'
import cat from '../../static/cat.png'

function Card1() {
  return (
    <>
        <div className='card1 gray-bk centered-card'>
          <div className='card1-comp' >
            <img src={cat} className='company-img' />
            <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>
                <span className='bold'>
                  Internship Front End Developer
                </span>
                <div>
                  <span>Coders</span>
                  <p>We are offering a training opertinity for (3) students .........</p>
                </div>
          </div>

            </div>
        </div>
    </>
  )
}

export default Card1