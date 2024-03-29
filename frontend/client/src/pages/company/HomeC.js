import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import { Link } from 'react-router-dom'


function HomeC() {
  return (
    <>
    <NavbarMain/>
    <div className='boxs-container'>
      <Link to='/CompSuper' className='gray-bk box navy-font bold not-clicked'>
        <div>Supervisor</div>
      </Link>
      <Link to='/CompStd' className='navy-bk box white-font bold not-clicked '>
        <div >Student</div>
      </Link>

    </div>
    </>
  )
}

export default HomeC