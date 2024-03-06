import React, { useState } from 'react'
import student from '../../static/Student.jpg'

function SubNavbar() {

  let [isRole,setIsRole]=useState(false) 
  let handelOnClickRole =()=> {
      setIsRole(true)
  }
  let handelOnClickRoleX =()=> {
      setIsRole(false)
  }
  let [isCompany,setIsCompany]=useState(false) 
  let handelOnClickCompany =()=> {
      setIsCompany(true)
  }
  let handelOnClickCompanyX =()=> {
      setIsCompany(false)
  }
  let [isPlace,setIsPlace]=useState(false) 
  let handelOnClickPlace =()=> {
      setIsPlace(true)
  }
  let handelOnClickPlaceX =()=> {
      setIsPlace(false)
  }
  return (
    <>
        <div className='sub-navbar'>
        <div className='sub-nav-cont'>
            <span className='sub-nav-font'onClick={handelOnClickRole}>Role</span>
            <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handelOnClickRole}>
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div className='sub-nav-cont'>
            <span className='sub-nav-font' onClick={handelOnClickCompany}>Company</span>
            <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handelOnClickCompany}>
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div className='sub-nav-cont'>
            <span className='sub-nav-font' onClick={handelOnClickPlace}>place</span>
            <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handelOnClickPlace}>
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div className={isRole?'show': 'hidden'} >
                        <div className='modal-no-bk'onClick={handelOnClickRoleX} ></div>
                        <div className='apply-box'>
                            <div className='filter-box-comp'>
                              <div className='std-checkbox-txt super'>
                                <input type='checkbox' className='checkbox-size' />
                                <span>Internship Frontend</span>
                              </div>
                              <div className='std-checkbox-txt super'>
                                <input type='checkbox' className='checkbox-size'/>
                                <span>Internship Backend</span>
                              </div>
                                </div>
                            </div>

                        </div>
                        <div className={isCompany?'show': 'hidden'} >
                        <div className='modal-no-bk'onClick={handelOnClickCompanyX} ></div>
                        <div className='filtr-comp-box'>
                            <div className='filter-box-Company-cont'>
                              <div className='std-checkbox-txt super'>
                                <input type='checkbox' className='checkbox-size' />
                                <span>Coders</span>
                              </div>
                              <div className='std-checkbox-txt super'>
                                <input type='checkbox' className='checkbox-size' />
                                <span>Coders</span>
                              </div>
                                </div>
                            </div>

                        </div>

                        <div className={isPlace?'show': 'hidden'} >
                        <div className='modal-no-bk'onClick={handelOnClickPlaceX} ></div>
                        <div className='filtr-box-place'>
                            <div className='filter-box-place-cont'>
                              <div className='std-checkbox-txt super'>
                                <input type='checkbox' className='checkbox-size' />
                                <span>Amman</span>
                              </div>
                              <div className='std-checkbox-txt super'>
                                <input type='checkbox' className='checkbox-size' />
                                <span>Irbd</span>
                              </div>
                                </div>
                            </div>

                        </div>
                    
    </div>
    </>
  )
}

export default SubNavbar