import React from 'react'
import NavbarReg from '../../component/Regestration/NavbarReg'
import CardProfBtn from '../../component/Regestration/CardProfBtn'
import { Link } from 'react-router-dom'

export default function UniSuper() {
  return (
    <>
        <NavbarReg/>
        <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Supervisor</span>
            </div>
            <Link to='/RegProfForm'>
                <button className='std-progress-btn-size navy-bk white-font bold' >Add Supervisor</button>
            </Link>
        </div>
    </div>
    <CardProfBtn/>
    </>
  )
}
