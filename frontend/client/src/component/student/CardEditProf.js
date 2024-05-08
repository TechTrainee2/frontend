import React from 'react'
import img from '../../static/Stdbk.jpg'
import img2 from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';


function CardEditProf(props) {
        let [inputValue, setInputValue] = useState(props.extra.bio);
 

  return (
    <>
     <div className='large-card gray-bk centered-card'>

        <div className='std-acc-comp'>

            <div className='std-images'>

                    <img src={props.profile.img_bk} name='img_bk' className='imgbk-size'/>
                    <div className='svg-circle-cover'>
                        <label>
                            <input type='file' accept='image/*'  name='img_bk' className='display-img' onChange={props.onImgChange2}/>                    
                            <svg className='wd40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path  fill='#1c3150' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                            </svg>
                        </label>
                    </div>

                <div className='std-profile'>
                    <img src={props.profile.img} name='img' className='std-circle' />

                    <div className='svg-circle'>
                        <label>
                            <input type='file' accept='image/*' name='img' className='display-img' onChange={props.onImgChange1}/>                    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill='#1c3150' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                            </svg>
                        </label>
                    </div>

            </div>
            </div>

                <div className='std-txt-left'>
                    <div className='std-btn-name'>

                        <div className='txt-std-name'>
                            <span>{props.extra.first_name} {props.extra.last_name}</span>
                        </div>

                        {/* <Link to={`/stdAcc/${props.id}`}> */}
                        <div className='std-btns-edit-acc'>
                                <button className='button-size-std navy-bk white-font' type = "submit"  >
                                    Done
                                </button>
                           
                        </div>
                            {/* </Link> */}

                    </div>
                    
                    <input type='text' name='bio' className='std-bio'
                    value={inputValue} 
                    onChange={props.onChange}/>

                </div>
        </div>
    </div>
    </>
  )
}

export default CardEditProf