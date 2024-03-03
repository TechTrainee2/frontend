import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import compSuper from '../../static/CompSuper.jpg'
import CompAssignCard from '../../component/company/CompAssignCard'

function CompAssignStd() {
  return (
    <>
        <NavbarMain/>
        <div  className='dep-uni-sup-container'>
          <div className='uni-super-assign'>
            <div className='uni-std-img-info'>
              <img src={compSuper} className='uni-std-circle'/>
              <div className='uni-std-report-info'>
                <span>Kamal Ibrahim</span>
                <span>CS Professor</span>
              </div>
            </div>
            <button className='button-size navy-bk white-font'>Assign student</button>
          </div>
          
          <div className='dep-uni-std-span-card'>
            <span className='bold assign-padding-span'>Current Student</span>
            <CompAssignCard/>
            </div>
        </div>
    </>
  )
}

export default CompAssignStd