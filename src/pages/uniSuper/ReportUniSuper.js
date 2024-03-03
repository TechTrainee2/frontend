import React from 'react'
import '../../App.css'
import '../../malak.css'
import Navbar from '../../component/uniSuper/Navbar'
import CardReportSuper from '../../component/uniSuper/CardReportSuper'

function ReportUniSuper() {
  return (
    <>
    <Navbar/>    
    <div className='centerd-comp'>
      <div className='uni-super-title-report'>
        <span className='super bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='uni-super-search-report gray-bk '/>
      </div>
      <CardReportSuper/>
    </div>
    </>
  )
}

export default ReportUniSuper