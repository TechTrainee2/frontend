import React from 'react'

import img from '../../static/prof.png'
import DepUniAssignCard from '../../component/department/DepUniAssignCard'
import NavbarHome from '../../component/department/NavbarHome'
function DepUniSuperStd() {
  return (
    <>
        <NavbarHome/>
        <div  className='dep-uni-sup-container'>
          <div className='uni-super-assign'>
            <div className='uni-std-img-info'>
              <img src={img} className='uni-std-circle'/>
              <div className='uni-std-report-info'>
                <span>Kamal Ibrahim</span>
                <span>CS Professor</span>
              </div>
            </div>
            <button className='button-size navy-bk white-font'>Assign student</button>
          </div>
          
          <div className='dep-uni-std-span-card'>
            <span className='bold assign-padding-span'>Current Student</span>
            <DepUniAssignCard/>
          </div>
        </div>
    </>
  )
}

export default DepUniSuperStd