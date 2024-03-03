import React, { useState } from 'react'
import student from '../../static/Student.jpg'

function CardStdReport() {
    let [isAdd,setIsAdd]=useState(false) 
    let handelOnClickAdd =()=> {
        setIsAdd(true)
    }
    let handelOnClickAddNo =()=> {
        setIsAdd(false)
    }
  return (
<>
    <div className='compsuper-std-report-cont'>
        <div className='compsuper-std-name-cont'>
                    <img src={student} className='uni-std-circle'/>
                    <div className='compsuper-std-name'>
                        <span >Mohammad Saleh's Report</span>
                    </div>
        </div>
    </div>

        <div className='card2 gray-bk centered-card'>
            <div className='report-container'>
                <div className='compsuper-header-report'>
                    <span className='bold'>Week 2</span>

                    <div className='compsuper-date'>
                        <span>Date from </span>
                        <span>26/2/2024 </span>
                        <span>To </span>
                        <span>4/3/2024</span>
                    </div>
                </div>
            

            <div className='compsuper-fill-report-topic '>

                <div className='fill-report-topic'>
                    <span className='bold'>Topic </span>
                    <span>Introduction to python </span>
                    <span>Introduction to Matplotlip</span>
                    <span>statistics book studying</span>
                </div>

                <div className='fill-report-topic'>
                    <span className='bold'>Software and Equipment used</span>
                    <span>datacomp.com</span>
                    <span>w3schools.com</span>
                    <span>pdf</span>
                </div>

                <div className='fill-report-topic'>
                    <span className='bold'>Hours</span> 
                    <span>4 </span>
                    <span>9</span>
                    <span>9</span>
                </div>
            
            </div>
        

        <div className='report-TotalHour bold'>
            <span>Total hours</span>
            <span>22</span>
        </div>

        <div className='uni-super-signature-cont '>

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

                <button className='button-size navy-bk white-font' onClick={handelOnClickAdd}>Upload Signature</button>

            <div className={isAdd?'show': 'hidden'} >
                <div className='reg-modal-bk'></div>
                <div className='uni-super-upload-sign-box '>
                    <div className='reg-add-std-box-comp'>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickAddNo} >
                            <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                <div className='reg-upload-comp'>
                    <span className='bold navy-font'>Upload Signature</span>
                    <label>
                        <input type='file' accept=".pdf" name='img' className='display-img'/> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill='#1c3150' d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                        </svg>
                    </label>
                     <button className='reg-button-size navy-bk white-font'>Done</button>
                </div>
                </div>
        
                        
    </div>

        </div>

        </div>
        </div>
    </>
  )
}

export default CardStdReport