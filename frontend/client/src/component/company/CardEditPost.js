import React from 'react'
import img from '../../static/company.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardEditPost(props) {
    // let [header, setHeader]=useState('Internship Front End Developer')
    // let [type, setType]=useState('Remote') 
    // let [txt, setTxt]=useState('We are offering a training opportunity for (3) \n students on react and react native \n About training: \n you are going to learn react and react nativeand how to code it using functions and hooks and you will take pre course for designing \n Qualifications: \n -know html and css \n -know js ')       
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
                        <button className='button-size-std navy-bk white-font' type='submit' onClick={props.onClick}>
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