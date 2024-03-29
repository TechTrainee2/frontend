import React, { useState } from 'react'
import student from '../../static/Student.jpg'

function CardStdBtn() {
    let [isDelete,setIsDelete]=useState(false) 
    let handelOnClickDeleteYes =()=> {
        setIsDelete(true)
    }
    let handelOnClickDeleteNo =()=> {
        setIsDelete(false)
    }
    let [isEdit,setIsEdit]=useState(false) 
    let handelOnClickEditYes =()=> {
        setIsEdit(true)
    }
    let handelOnClickEditNo =()=> {
        setIsEdit(false)
    }

  return (
    <>
    <div className='large-card gray-bk centered-card' >
        {!isEdit?(
        <>
        <div className='reg-std-cont'>
            <div className='reg-std-info-comp'>
                <img src={student} className='company-img'/>
                <div className='uni-std-report-info super'>
                    <span>Mohammad Saleh </span>
                    <span>CS </span>
                </div>    
            </div>           
            <div className='reg-std-btn-comp'>
                  <div className='svg-txt '>
                  <svg className='wd40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handelOnClickEditYes}>
                    <path fill='#1c3150' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                  </svg>
                    <span  onClick={handelOnClickEditYes}>Edit</span>
                  </div>
                  <div className='svg-txt'>
                    <svg className='wd35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickDeleteYes}>
                        <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                    <span  onClick={handelOnClickDeleteYes}>Delete</span>
                  </div>
            </div>


                  
                  <div className={isDelete?'show': 'hidden'} >
                        <div className='reg-modal-bk'></div>
                        <div className='reg-apply-box '>
                            <div className='apply-box-comp'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickDeleteNo}>
                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>

                                <span className='bold navy-font'>Are you sure u want to delete?</span>

                                <div className='apply-box-btns'>
                                    <button className='button-size-std gray-bk navy-font' onClick={handelOnClickDeleteNo}>No</button>
                                    <button className='button-size-std navy-bk white-font'>Yes</button>
                                </div>
                            </div>
                            </div>

                        
                    </div>

              
                   


        </div>
    </>
    ):(
<>
<div className='reg-std-info-comp width-90'>
                <img src={student} className='company-img'/>
                <div className='uni-std-report-info'>
                    <input type='text'placeholder='Mohammad Saleh ' className='reg-input-edit-super font-med light-blue-bk'/>
                    <input type='text' placeholder='CS ' className='reg-input-edit-super font-med light-blue-bk'/>
                </div>    
                    <button className='navy-bk white-font button-size super btn-place'onClick={handelOnClickEditNo}>Done</button>
            </div>
</>
    )}
    </div>
    </>
  )
}

export default CardStdBtn