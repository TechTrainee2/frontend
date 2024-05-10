import React from 'react'
import { Link } from 'react-router-dom'

function CardHome() {
  return (
    <>
    <div className='boxs-container-dep'>
      <Link to='/RegUniSuper' className='gray-bk box navy-font bold not-clicked'>
        <div>Supervisor</div>
      </Link>
      <Link to='/RegStd' className='navy-bk box white-font bold not-clicked '>
        <div >Student</div>
      </Link>

    </div>
    </>
  )
}

export default CardHome