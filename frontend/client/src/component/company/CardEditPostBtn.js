import React from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'

function CardEditPostBtn(props) {
  return (
    <>
      <div className='card1 gray-bk centered-card'>
        <div className='card1-comp-acc-post ' >
          <img src={props.profile.img} className='large-img' />

            <div className='std-comp-post'>
                <div>
                <div className='comp-btns'>
                <span className=' super'>
                  {props.post.title}
                </span>
                        <Link to= {`/compEditPost/${props.id}`}>
                            <button className='comp-button-size navy-bk white-font super'>
                                Edit Post
                            </button>
                        </Link>
                    </div>
                </div>
                
      

                <div className='comp-post-name-place super'>
                  <span>{props.extra.name}</span>
                  <span className='remote-btn-std'>{props.post.training_mode}</span>
                </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default CardEditPostBtn