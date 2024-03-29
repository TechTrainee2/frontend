import React from 'react'
import comp from '../../static/company.jpg'
import { Link } from 'react-router-dom'

function CardPost() {
  return (
    <>
    
    <Link to='/stdPost' className='dep-card-super gray-bk margin-bottom'>
        
            <div className='comp-post-container'>
                <div className='uni-std-img-info'>
                    <img src={comp} className='std-com-post-circle'/>
                    <span className='super'>Coders</span>

                </div>
                <div className='std-comp-post-cont'>
                  <span className='bold font-med'>Internship Frontend Developer</span> 
                  <span>On site</span>
                </div>                    
            </div>
        
    </Link>

    </>
  )
}

export default CardPost