import React, { useState } from 'react'
import compsuper from '../../static/CompSuper.jpg'
import { Link } from 'react-router-dom'



function CompanySuperCard(props) {
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
    <div className='card2 gray-bk centered-card' >
        {!isEdit?(
        <>
         <div className='uni-sup-std-info-svg'>
              <div className='uni-std-img-info'>
                  <img src={props.CompSupervisor.img} className='company-img '/>
                  <div className='uni-std-report-info super'>
                      <span>{props.CompSupervisor.company_supervisor.first_name} {props.CompSupervisor.company_supervisor.last_name}</span>
                      
                  </div>
                    
              </div>
              <div className='svg-container'>
                <div className='svg-txt'>
                    <Link to='/assignCompSuper'>
                        <svg className='wd40 he40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill='#1c3150' d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                        </svg>
                    </Link>
                    <Link to='/assignCompSuper'>
                        <span>Assign</span>
                    </Link>
                </div>
                <div className='svg-txt'>
                        <svg className='wd40 he40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handelOnClickEditYes}>
                            <path fill='#1c3150' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                        </svg>
                    
                  
                        <span  onClick={handelOnClickEditYes}>Edit</span>
                    
                </div>

                    <div className='svg-txt'>
                        {/* <svg className='wd40 he40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickDeleteYes}>
                            <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg> */}
                        {/* <span  onClick={handelOnClickDeleteYes}>Delete</span> */}
                    </div>

              </div>

                  
                  <div className={isDelete?'show': 'hidden'} >
                        <div className='modal-bk'></div>
                        <div className='apply-box'>
                            <div className='apply-box-comp'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickDeleteNo}>
                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>

                                <span className='bold navy-font'>Are you sure you want to delete?</span>

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
{/* <form className='reg-std-info-comp width-90' onSubmit={props.onSubmit}>
                <img src={compsuper} className='company-img'/>
                <div className='uni-std-report-info'>
                    <input type='text'placeholder='name' name='first_name' onChange={props.onChange}  className='reg-input-edit-super font-med light-blue-bk'/>
                    <input type='text'placeholder='name' name='last_name' onChange={props.onChange}  className='reg-input-edit-super font-med light-blue-bk'/>
                
                </div>    
                    <button className='navy-bk white-font button-size super btn-place' type='submit'>Done</button>
            </form> */}
</>
    )}
    </div>
    </>
  )
}
    
    export default CompanySuperCard