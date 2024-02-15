import React from 'react'
import img from '../../static/company.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardNewPost() {
    let [header, setHeader]=useState('')
    let [type, setType]=useState('') 
    let [txt, setTxt]=useState('')       
    let handleChangeHeader = (event) => 
          setHeader(event.target.value);
          let handleChangeType = (event) => 
          setType(event.target.value);
          let handleChangeTxt = (event) => 
          setTxt(event.target.value);
  return (
    <>
        <div className='card2 gray-bk centered-card'>
          <div className='std-post-detail' >

            <div>
                <input type='text' name='header' className='std-data std-company-profile bold'
                    value={header} 
                    onChange={handleChangeHeader}/>
            </div>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <img src={img} className='company-img2' />
                  <span>Coders</span>
                  
                  <div>
                    <input type='text' name='type' className='std-data '
                    value={type} 
                    onChange={handleChangeType}/>
                  </div>

                </div>

                <div className='std-post-txt'>
                    <textarea name='txt' className='comp-data' 
                    value={txt}
                    onChange={handleChangeTxt}/>
                </div>

              </div>

                <div className='std-apply-btn'>
                    <Link to='/compProfile'>
                        <button className='button-size-std navy-bk white-font'>
                            Done
                        </button>
                    </Link>
                </div>

            </div>
            </div>
    </>
  )
}

export default CardNewPost