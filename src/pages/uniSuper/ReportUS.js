import React from 'react'
import ReportWeek from '../../component/uniSuper/ReportWeek'
import Navbar from '../../component/uniSuper/Navbar'
import img from '../../static/Student.jpg'
// import '../../App.css'
import '../../malak.css'
function ReportUS() {
  return (
    <>
      <Navbar/>
      <div className='uni-std-final-report'>
        <div className='std-report-img-text'>
          <img src={img} className='uni-std-circle'/>
          <span>Mohammad Saleh </span>
        </div>
      <ReportWeek/>
      <ReportWeek/>
      </div>
    </>
    )
}

export default ReportUS