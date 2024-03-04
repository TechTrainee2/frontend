import React from 'react'
import NavbarHome from '../../component/department/NavbarHome'
import DepStdReportCard from '../../component/department/DepStdReportCard'

function DepReport() {
  return (
    <>
        <NavbarHome/>
         <div className='centerd-comp'>
      <div className='uni-super-title-report'>
        <span className='font-super bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='uni-super-search-report gray-bk '/>
      </div>
      <DepStdReportCard/>
    </div>
    </>
  )
}

export default DepReport