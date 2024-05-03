import React from 'react'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { Link } from 'react-router-dom'

function HomeDep() {
  return (
    <>
    <NavbarHomeDep/>
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