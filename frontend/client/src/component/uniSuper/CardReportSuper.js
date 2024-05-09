import React from 'react'
import student from '../../static/Student.jpg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CardReportSuper(props) {
  return (
    <>
    
    <div className='card-uni-super-home gray-bk centered-card'>
        <div className='uni-super-std-card2'>
            <div className='super-std-img'>
            <Link to= {`/stdAcc/${props.Student.student.user}`}>
                <img src={props.Student.img} className='uni-std-circle'/>
            </Link>
                <div className='compsuper-std-name'>
                <Link to= {`/stdAcc/${props.Student.student.user}`}>
                    <span >{props.Student.student.first_name} {props.Student.student.last_name}</span>
                </Link>
                    {/* <span>CS</span> */}
                </div>
            </div>
        <div className='uni-super-std-btn2'>
            <Link to ={`/stdreportUniSuper/${props.Student.student.user}`}  className='not-clicked'>
                <span className='compsuper-underline'>Report</span>
            </Link>
        </div>
    </div>
    </div>


    </>
  )
}

export default CardReportSuper