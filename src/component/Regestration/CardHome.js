import React from 'react'
import { Link } from 'react-router-dom'

function CardHome() {
  return (
    <>
    <div className='boxs-container'>
      <Link to='/RegProf' className='gray-bk reg-box navy-font bold not-clicked'>
        <div>Supervisor</div>
      </Link>
      <Link to='/RegStd' className='navy-bk reg-box white-font bold not-clicked '>
        <div >Student</div>
      </Link>

    </div>
    </>
  )
}

export default CardHome