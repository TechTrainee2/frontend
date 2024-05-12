import React from 'react'
import img from '../../static/company.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardEditPost(props) {
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
                  <span>{props.extra.name}</span>
                  
                  <div>
                    <input type='text' name='training_mode' className='std-data '
                    placeholder='Training mode should be remote or onsite' 
                    onChange={props.onChange}/>
                  </div>

                </div>

                <div className='std-post-txt'>
                    <input type='text' name='post_details' className='comp-data'
                    placeholder='Post Details' 
                    onChange={props.onChange}/>
                </div>

              </div>

                <div className='std-apply-btn'>
                    <Link to ={`/compEditProfile/${props.id}`} className='not-clicked'>
                        <button className='button-size-std navy-bk white-font' type='submit' >
                            Done
                        </button>
                    </Link>
                </div>

            </div>
            </div>
    </>
  )
}

export default CardEditPost