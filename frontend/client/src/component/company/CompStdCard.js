import React, { useState } from 'react'
import student from'../../static/Student.jpg'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
function CompStdCard(props) {
    // let { user, loading } = useSelector((state) => state.user);

// 
        let [isModal,setIsModal]=useState(false) 
        let handelOnClick =()=> {
                setIsModal(true)
        }
        let handelOnClickX =()=> {
                setIsModal(false)
        }

        const onSubmit = async (e) => {
                e.preventDefault();
                setIsModal(false)
                props.fetchStudents()
                // Create an object that only includes fields from data that are not empty strings
                // const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
                //     if (value !== '') {
                //         newData[key] = value;
                //     }
                //     return newData;
                // }, {});
            
                // Use nonEmptyData in your fetch request
        
        try {
            const res2 = await fetch(`http://127.0.0.1:8000/users/user/student/assign/company/${props.Student.student.user}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    'company':null,
                }),
            });
            if (!res2.ok) {
                throw new Error("Failed to fetch data");
            }
            await res2.json();
            // console.log(user.id);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        
    return (
        <>
                <div className='card2 gray-bk centered-card' >
                        <div className='std-info-svg'>
                                <div className='uni-std-img-info'>
                                <Link to={`/stdAcc/${props.Student.student.user}`}>
                                        <img src={props.Student.img} className='uni-std-circle'/>
                                </Link>
                                        <div className='uni-std-report-info'>
                                        <Link to={`/stdAcc/${props.Student.student.user}`}>
                                                { props.Student.student.first_name} 
                                                        {props.Student.student.last_name}</Link>
                                                {/* <span>CS</span> */}
                                             
                                        </div>
                                         
                                </div>
                                {
                                    props.Student.student.company_supervisor == null ? 
                                    <span>no supervisor assigned</span> : 
                                        <Link to={`/CompSuperAcc/${props.Student.student.company_supervisor.user}`}>{props.Student.student.company_supervisor.first_name}</Link>
                                }
                        </div>
                        <div className='svg-txt'>
                                        <svg className='wd40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClick}>
                                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                        </svg>
                                        <span  onClick={handelOnClick}>delete</span>
                                </div>  
                                <div className={isModal?'show': 'hidden'} >
                                        <div className='modal-bk'></div>
                                        <form className='apply-box' onSubmit={onSubmit}>
                                                <div className='apply-box-comp'>
                                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                                                        <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                                </svg>

                                                        <span className='bold navy-font'>Are you sure you want to delete?</span>

                                                        <div className='apply-box-btns'>
                                                                <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                                                                <button className='button-size-std navy-bk white-font' type='submit'>Yes</button>
                                                        </div>
                                                </div>

                                        </form>
                                </div>
                        </div>
                        
        </>
    )
}

export default CompStdCard