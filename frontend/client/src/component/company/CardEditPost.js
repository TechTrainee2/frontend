import React from 'react'
import img from '../../static/company.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function CardEditPost(props) {


  let [data,setData]=useState({
    'title':props.post.title,
    'post_details':props.post.post_details,
    'training_mode':props.post.training_mode,
    })

 
  useEffect(() => {
    setData({
      'title': `${props.post.title}`,
      'post_details': `${props.post.post_details}`,
      'training_mode': `${props.post.training_mode}`,
    
    });

  }, [props.post.title,props.post.post_details,props.post.training_mode]);

  let onChange = (e) => {

    const { name, value } = e.target;
    console.log(value);
    if (props.onChange) {
      props.onChange(e);
    }
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <>
        <div className='large-card gray-bk centered-card'>
          <div className='std-post-detail' >

            <div>
                <input type='text' name='title' className='std-data std-company-profile bold'
                placeholder='Post Title'  value={data.title}
                    onChange={onChange}/>
            </div>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <img src={props.profile.img} className='company-img2' />
                  <span>{props.extra.name}</span>
                  
                  <div>
                    <input type='text' name='training_mode' className='std-data '
                    placeholder='Training mode should be remote or onsite' value={data.training_mode}
                    onChange={onChange}/>
                  </div>

                </div>

                <div className='std-post-txt'>
                    <input type='text' name='post_details' className='comp-data' value={data.post_details}
                    placeholder='Post Details' 
                    onChange={onChange}/>
                </div>

              </div>

                <div className='std-apply-btn'>
                   
                        <button className='button-size-std navy-bk white-font' type='submit' >
                            Done
                        </button>
                   
                </div>

            </div>
            </div>
    </>
  )
}

export default CardEditPost