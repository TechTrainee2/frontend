import React from 'react'
import NavbarHome from '../../component/compSuper/NavbarHome'
import CardReport from '../../component/compSuper/CardReport'

function ReportCS() {
  return (
    <>
    <NavbarHome/>
    <div className='centerd-comp'>
      <div className='uni-super-title-report'>
        <span className='font-super bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='uni-super-search-report gray-bk '/>
      </div>
      <CardReport/>
    </div>

    </>
  )
}

export default ReportCS