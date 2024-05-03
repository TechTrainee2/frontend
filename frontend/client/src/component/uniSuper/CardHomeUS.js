import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
function CardHomeUS(props) {
  return (
    <>
       
    <div className='card-uni-super-home gray-bk centered-card'>
        <div className='uni-super-std-card'>
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
        <div className='uni-super-std-btn'>
            <Link to ={`/compProfile/${props.Student.student.company.user}`}  className='not-clicked'>
                <span className='compsuper-underline'>Trainee at coders</span>
            </Link>
            <Link to ={`/CompSuperAcc/${props.Student.student.company_supervisor.user}`}  className='not-clicked'>
                <span className='compsuper-underline'>Supervisor</span>
            </Link>
        </div>
    </div>
    </div>


  
    </>
  )
}

export default CardHomeUS