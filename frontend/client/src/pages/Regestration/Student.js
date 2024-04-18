import React from 'react'
import Navbar from '../../component/Regestration/Navbar'
import CardStdBtn from '../../component/Regestration/CardStdBtn'
import { Link } from 'react-router-dom'

export default function Student() {
  return (
    <>
    <Navbar/>
    <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Students</span>
            </div>
            <Link to='/RegStdForm'>
            <button className='std-progress-btn-size navy-bk white-font bold' >Add Student</button>
            </Link>
        </div>
    </div>
    <CardStdBtn/>
    </>
  )
}
