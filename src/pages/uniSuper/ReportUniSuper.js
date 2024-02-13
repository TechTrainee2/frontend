import React from 'react'
import '../../App.css'
import '../../malak.css'
import Navbar from '../../component/uniSuper/Navbar'
import CardReportSuper from '../../component/uniSuper/CardReportSuper'

function ReportUniSuper() {
  return (
    <>
        <Navbar/>    
        <div className='uni-std-final-report'>
            <span className='title bold'>Final Report</span>
            <CardReportSuper/>
            <CardReportSuper/>

        </div>
    </>
  )
}

export default ReportUniSuper