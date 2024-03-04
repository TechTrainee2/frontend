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
              <img src={compSuper} className='company-img'/>
              <div className='uni-std-report-info'>
                <span className='super'>Ahmad</span>
              </div>
            </div>
            <button className='comp-assign-button-size navy-bk white-font'>Assign student</button>
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