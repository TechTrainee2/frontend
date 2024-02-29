import React from 'react'
import NavbarHome from '../../component/department/NavbarHome'
import { Link } from 'react-router-dom'

function HomeDep() {
  return (
    <>
    <NavbarHome/>
    <div className='boxs-container'>
      <Link to='/depSuper' className='gray-bk box navy-font bold not-clicked'>
        <div>Supervisor</div>
      </Link>
      <Link to='/depStd' className='navy-bk box white-font bold not-clicked '>
        <div >Student</div>
      </Link>

    </div>
    </>
  )
}

export default HomeDep