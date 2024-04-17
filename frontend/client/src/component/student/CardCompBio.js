import React from 'react'

function CardCompBio(props) {
  return (
    <>
     <div className='large-card gray-bk centered-card'>
        <div className='skill-comp'>
            <span className='bold'>About Us</span>

            <p>{props.profile.bio}</p>

        </div>
    </div>
    </>
  )
}

export default CardCompBio