import React, { useState } from 'react'

import Navbar from '../../component/uniSuper/Navbar'
import CardReportSuper from '../../component/uniSuper/CardReportSuper'

function ReportUniSuper() {
  return (
    <>
    <Navbar/>    
    <div className='centerd-comp' >
      <div className='uni-super-title-report'>
        <span className='font-super bold'>Students Report</span>
      </div>
      <CardReportSuper/>
    </div>
    </>
  )
}

export default ReportUniSuper