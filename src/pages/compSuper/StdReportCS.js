import React from 'react'
import NavbarStdReport from '../../component/compSuper/NavbarStdReport'
import CardStdReport from '../../component/compSuper/CardStdReport'
import { Link } from 'react-router-dom'
import student from '../../static/Student.jpg'

function StdReportCS() {
  return (
    <>
    <NavbarStdReport/>
    <div>
    <div className='compsuper-std-report-cont'>
        <div className='compsuper-std-name-cont'>
                    <img src={student} className='large-img'/>
                    <div className='compsuper-std-name'>
                        <span className='font-super'>Mohammad Saleh's Report</span>
                    </div>
        </div>

        <Link to='/CompSuperFillReport' >
            <button className='comp-assign-button-size navy-bk white-font'>Add Report</button>
        </Link>
    </div>
    <CardStdReport/>
    </div>
    </>
  )
}

export default StdReportCS