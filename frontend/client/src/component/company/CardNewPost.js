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
                    placeholder='Post Title'  
                    onChange={props.onChange}/>
            </div>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <img src={props.profile.img} className='company-img2' />
                  <span>{props.extra.name} </span>
                  
                  <label for="training_mode">Choose a training_mode:</label>
                  <select  name="training_mode" className='std-data '
                  onChange={props.onSelect}>

                    <option value="remote">remote</option>
                    <option value="onsite">onsite</option>
                    {/* <option type='text' name='training_mode' className='std-data '
                    placeholder='Training mode should be remote or onsite' 
                    onChange={props.onChange} */}
                    {/* /> */}
                  </select>

                </div>

                <div className='std-post-txt'>
                    <input type='text' name='post_details' className='comp-data' 
                   placeholder='Post Details' 
                    onChange={props.onChange}/>
                </div>

              </div>

                <div className='std-apply-btn'>
                {/* <Link to ={`/compProfile/${props.id}`} className='not-clicked'> */}
                        <button className='button-size-std navy-bk white-font' type='submit' onClick={props.onClick}>
                            Done
                        </button>
                {/* </Link> */}
                </div>

            </div>
            </div>
    </>
  )
}

export default CardNewPost