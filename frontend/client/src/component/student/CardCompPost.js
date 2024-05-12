import React from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardCompPost(props) {
  return (
    <>
        <Link to= {`/PostViewDetail/${props.post.id}`} className='card1 gray-bk centered-card'>
          <div className='card1-comp-acc-post ' >
            <img src={props.profile.img} className='large-img' />

            <div className='std-comp-post'>

                
                <div className="post_date">
                  <span className='bold super'>{props.post.title} </span>
                </div>
                <div className="post_date_phone">
                  <span> {props.post.date}</span>
                </div>
                <div className='std-comp-post-place super'>
                  <span>{props.extra.name}</span>
                  <span className='remote-btn-std'>{props.post.training_mode}</span>
                </div>

                <div className='std-btns'>
                </div>

            </div>
          </div>
        </Link>
    </>
  )
}

export default CardCompPost