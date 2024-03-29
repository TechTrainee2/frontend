import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import CompStdCard from '../../component/company/CompStdCard'

function CompStd() {
  return (
    <>
      <NavbarMain/>
    <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Students</span>
                <span className='warning'>No. of student w/o supervisor : 1</span>
            </div>
        </div>
        <CompStdCard/>
    </div>
        
    </>
  )
}

export default CompStd