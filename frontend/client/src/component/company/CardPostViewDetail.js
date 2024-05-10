import React, { useState } from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom';


function CardPostViewDetail(props) {
  let { id } = useParams();

  let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }

  return (
    <>
        <div className='large-card gray-bk centered-card margin-bottom margin-bottom-apply'>
          <div className='std-post-detail' >


                <span className='std-company-profile bold'>
                  {props.post.title}
                </span>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <Link to= {`/compProfile/${props.post.company}`}>
                    <img src={props.profile.img} className='company-img2' />
                  </Link>
                  <Link to={`/compProfile/${props.post.company}`}>
                    <span>{props.extra.name}</span>
                  </Link>
                  <span>{props.post.training_mode}</span>
                </div>

                <div className='std-post-txt'>
                  <p>
                    {props.post.post_details}
                  </p>
                </div>
              </div>

            </div>
            </div>
    </>
  )
}

export default CardPostViewDetail