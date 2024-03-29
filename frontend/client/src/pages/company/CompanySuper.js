import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import CompanySuperCard from '../../component/company/CompanySuperCard'
import { Link } from 'react-router-dom'

export default function CompanySuper() {
  return (
    <>
        <NavbarMain/>
        <div className='dep-uni-sup-container'>
            <div className='uni-super-assign'>
                <span className='font-super bold'>Supervisor</span>
                <Link to='/addCompSuper'>
                    <button className='button-size navy-bk white-font font-med'>Add supervisor</button>
                </Link>
            </div>
            <CompanySuperCard/>
        </div>
    </>
  )
}
