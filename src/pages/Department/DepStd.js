import React from 'react'
import { Link } from 'react-router-dom'

import DepStdCard from '../../component/department/DepStdCard'
import NavbarHome from '../../component/department/NavbarHome'

function DepStd() {
  return (
    <>
    <NavbarHome/>
    <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Students</span>
                <span className='warning'>No. of student w/o training : 1</span>
            </div>
        </div>
    </div>
        <DepStdCard/>
    </>
  )
}

export default DepStd