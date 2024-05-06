import React from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function CardStdReport(props) {



    const [data, setData] = useState(null);
    const { id } = useParams();
    let [TotalHour,setTotalHours] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            let totalHours = 0;
            if (props.report && props.report.table_data) {
                await Promise.all(props.report.table_data.map(async item => {
                    totalHours += parseInt(item.hours);
                }));
            }
            setTotalHours(totalHours);
        }
       
        // Call fetchData function when component mounts
        fetchData();
    }, [props.report]);



  return (
    <>
        <div className='large-card gray-bk centered-card margin-bottom'>
            <div className='report-container'>
                <div className='compsuper-header-report'>
                    <span className='bold'>Week {props.report.week_number}</span>

                    <div className='compsuper-date'>
                        <span>Date from </span>
                        {
                            props.report && props.report.date_begin!==null && props.report.date_end!==null ?(
                               <>
                                <span>{props.report.date_begin }</span>
                                <span>To </span>
                                <span>{props.report.date_end }</span>
                               </>
                            ):<></>  
                        }
                        {/* <span>{data.date_begin }</span> */}
                       
                   
                    </div>
                </div>
            

            <div className='compsuper-fill-report-topic '>

                <div className='fill-report-topic'>
                    <span className='bold'>Topic </span>
                    {   props.report.table_data!=null ?(
                        props.report.table_data.map((item) => (
                            <div className='fill-report-topic'>
                                <span>{item.topic}</span>
                            </div>

                    ) 
                    )):<></>
                    }
                              
                </div>

                <div className='fill-report-topic'>
                    <span className='bold'>Software and Equipment used</span>
                    {   props.report.table_data!=null ?(
                        props.report.table_data.map((item) => (
                            <div className='fill-report-topic'>
                                <span>{item.details}</span>
                            </div>
                    ) 
                    )):<></>
                    }
                  

                </div>

                <div className='fill-report-topic'>
                    <span className='bold'>Hours</span> 
                    {   props.report.table_data!=null ?(
                        props.report.table_data.map((item) => (
                            <div className='fill-report-topic'>
                                <span>{item.hours}</span>
                            </div>
                    ) 
                    )):<></>
                    }
                    {/* <span>{data[0].table_data[0].hours}</span> */}
                    
                </div>
            
            
            </div>
        

        <div className='report-TotalHour bold'>
            <span>Total hours</span>
            <span>{TotalHour}</span>
        </div>

        <div className='report-signature-cont'>

            <label className='signature-file-cont'>
                <a href='/download'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#1c3150" d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                    </svg>
                </a>
                <span>Company Supervisor Signature</span>
                
            </label>

            <label className='signature-file-cont'>
                <a href='/download'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#1c3150" d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                    </svg> 
                </a>
                <span>Company Supervisor Signature</span>
               
            </label>

        </div>

        </div>
        </div>
    </>
  )
}

export default CardStdReport