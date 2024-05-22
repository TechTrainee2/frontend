import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


function CardStdReport(props) {
    let user = useSelector((state) => state.user);
    let [data, setData] = useState(null);
    const { id } = useParams();
    let [allowNavigate, setAllowNavigate] = useState(false);
    let [TotalHour,setTotalHours] = useState(0);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    let [isAdd,setIsAdd]=useState(false) 
    let handelOnClickAdd =()=> {
        setIsAdd(true)
    }
    let handelOnClickAddNo = () => {
        setIsAdd(false);
    }
    
    const onPdfChange = event => {
        if (event.target.files && event.target.files[0]) {
          const pdfUrl = URL.createObjectURL(event.target.files[0]);
          setSelectedPdfUrl(pdfUrl);
          setSelectedPdf(event.target.files[0]);
        }
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
      
          if (selectedPdf) {
            formData.append('universitySupervisorSignature', selectedPdf); // 'cv' should match the field name expected by your server
          }
      
          // Add other data to formData
          for (const key in data) {
            if (typeof data[key] === 'object' && data[key] !== null) {
              formData.append(key, JSON.stringify(data[key]));
            } else {
              formData.append(key, data[key]);
            }
          }
        
          try {
            const response = await fetch(`http://127.0.0.1:8000/users/user/report/update/${props.report.id}`, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
              },
              body: formData,
            });
          
            if (!response.ok) {
              throw new Error('Failed to create post');
            }
          
            const res = await response.json();
          } catch (error) {
            console.error('Error:', error);
          }
          setAllowNavigate(true);
          props.fetchData()
      };

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
    }, [props.report,id]);

  return (
<>

        <div className='large-card gray-bk centered-card'>
            <div className='report-container'>
                <div className='compsuper-header-report'>
                    <span className='bold'>Week {props.report.week_number}</span>

                    <div className='compsuper-date'>
                    {
                            props.report && props.report.date_begin!==null && props.report.date_end!==null ?(
                               <>
                               <span>Date from </span>
                                <span>{props.report.date_begin }</span>
                                <span>To </span>
                                <span>{props.report.date_end }</span>
                               </>
                            ):<></>  
                        }
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
                </div>
            
            </div>
        

        <div className='report-TotalHour bold'>
            <span>Total hours</span>
            <span>{TotalHour}</span>
        </div>
     
        <div className='uni-super-signature-cont '> 
              <div className='signature-file-cont'>
                <a href={props.report.companySupervisorSignature} target='_blank'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#1c3150" d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                    </svg> 
                </a>
                <span>Company Supervisor Signature</span>
               
            </div>
        {props.report.universitySupervisorSignature != null && (
            <div className='signature-file-cont'>
                <a href={props.report.universitySupervisorSignature} target='_blank'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#1c3150" d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                    </svg>
                </a>
                <span>University Supervisor Signature</span>
                
            </div>
        )
        }
            
            

            {props.report.universitySupervisorSignature == null && ( 
            <button className='button-size navy-bk white-font font-med' onClick={handelOnClickAdd}>Upload Signature</button>
            )}

            <div className={isAdd?'show': 'hidden'} >
                <div className='reg-modal-bk' onClick={handelOnClickAddNo}></div>
                <div className='uni-super-upload-sign-box '>
                    <div className='reg-add-std-box-comp' onClick={handelOnClickAddNo}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                            <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    
                        <form onSubmit={onSubmit}> 
                        <div className='reg-upload-comp'>
                            <span className='bold navy-font'>Upload Signature</span>
                            <label>
                                <input type='file' accept=".pdf" name='img' className='display-img' onChange={onPdfChange}/> 
                                {selectedPdfUrl ? 
                                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="#1c3150" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"/>
                                    </svg> 
                                    : 
                                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#1c3150" d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                                    </svg>
                                }
                            </label>
                        
                            <button className='reg-button-size navy-bk white-font' type='submit' onClick={handelOnClickAddNo}>Done</button>
                        </div>
                        </form>
                        {/* {allowNavigate && (window.location.href = `/stdreportUniSuper/${id}`)}    */}
                    
                    
                </div>        
            </div>
    
        </div>

        </div>
        </div>
    </>
  )
}

export default CardStdReport