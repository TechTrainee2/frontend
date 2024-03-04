import React from 'react'

import DepUniSuperCard from '../../component/department/DepUniSuperCard'
import NavbarHome from '../../component/department/NavbarHome'

function DepUniSuper() {
  return (
    <>
        <NavbarHome/>
        <div className='dep-uni-sup-container'>
            <span className='bold font-super '>Supervisors</span>
            <div className='dep-uni-sup-card'>
                <DepUniSuperCard/>
                <DepUniSuperCard/>
                <DepUniSuperCard/>
                <DepUniSuperCard/>
            </div>
        </div>
    </>
  )
}

export default DepUniSuper