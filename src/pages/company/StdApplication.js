import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import ApplicationStdCard from '../../component/company/ApplicationStdCard'

function StdApplication() {
  return (
    <>
        <NavbarMain/>
        <div className='dep-uni-sup-container'>
            <div className='uni-super-assign'>
                <span className=' font-super bold'>Applications</span>
            </div>
            <ApplicationStdCard/>
        </div>
    </>
  )
}

export default StdApplication