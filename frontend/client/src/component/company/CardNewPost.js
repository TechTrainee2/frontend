import React from 'react'
import img from '../../static/company.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardNewPost(props) {
    // let [header, setHeader]=useState('')
    // let [type, setType]=useState('') 
    // let [txt, setTxt]=useState('')       
    // let handleChangeHeader = (event) => 
    //       setHeader(event.target.value);
    //       let handleChangeType = (event) => 
    //       setType(event.target.value);
    //       let handleChangeTxt = (event) => 
    //       setTxt(event.target.value);

  return (
    <>
        <div className='large-card gray-bk centered-card'>
          <div className='std-post-detail' >

            <div>
                <input type='text' name='title' className='std-data std-company-profile bold'
                    // value={header} 
                    onChange={props.onChange}/>
            </div>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <img src={props.profile.img} className='company-img2' />
                  <span>{props.extra.name} </span>
                  
                  <div>
                    <input type='text' name='training_mode' className='std-data '
                    placeholder='Training mode should be remote/onsite' 
                    onChange={props.onChange}
                    />
                  </div>

                </div>

                <div className='std-post-txt'>
                    <input type='text' name='post_details' className='comp-data' 
                    // value={txt}
                    onChange={props.onChange}/>
                </div>

              </div>

                <div className='std-apply-btn'>
               
                        <button className='button-size-std navy-bk white-font' type='submit' onClick={props.onClick}>
                            Done
                        </button>
                    
                </div>

            </div>
            </div>
    </>
  )
}

export default CardNewPost