import React from 'react'
import img from '../../static/company.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardNewPost(props) {
  

  return (
    <>
        <div className='large-card gray-bk centered-card'>
          <div className='std-post-detail' >

            <div>
                <input type='text' name='title' className='std-data std-company-profile bold'
                    placeholder='Post Title'  
                    onChange={props.onChange}/>
            </div>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <img src={props.profile.img} className='company-img2' />
                  <span>{props.extra.name} </span>
                  
                  <label for="training_mode">Choose a training_mode:</label>
                  <select  name="training_mode" className='std-training-mode-option '
                  onChange={props.onSelect}>

                    <option value="">Select </option>
                    <option value="remote">remote</option>
                    <option value="onsite">onsite</option>
                
                  </select>

                </div>

                <div className='std-post-txt'>
                    <textarea type='text'  name='post_details' className='comp-data text-area-post ' 
                   placeholder='Post Details' 
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