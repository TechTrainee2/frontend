import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'    
import { Link } from 'react-router-dom'


function CardStudent1(props) {
  return (
    <>
        <div className='card2 gray-bk centered-card'>

            <div className='compsuper-std-card-container'>

                <div className='compsuper-std-img'>
                <Link to= {`/stdAcc/${props.Student.student.user}`}>
                    <img src={props.Student.img} className='company-img'/>
                </Link>
                <Link to= {`/stdAcc/${props.Student.student.user}`}>
                    <span className='super bold'>{props.Student.student.first_name} {props.Student.student.last_name}</span>
                </Link>
                </div>
                <div className='compsuper-std-note'>
                    <span>
                        <div className='note-circle navy-bk'></div>
                    </span>
                    <p className='super'>Has been selected as a trainee under your supervision </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardStudent1