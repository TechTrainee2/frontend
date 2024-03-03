import React from 'react'
import comp from '../../static/company.jpg'
import { Link } from 'react-router-dom'

function CardPost() {
  return (
    <>
    
    <Link to='/stdPost' className='dep-card-super gray-bk margin-bottom'>
        
            <div className='comp-post-container'>
                <div className='uni-std-img-info'>
                    <img src={comp} className='uni-std-circle'/>
                    <span>Coders</span>

                </div>
                <span>Internship Frontend Developer</span>
                <span>On site</span>

                    
            </div>
        
    </Link>

    </>
  )
}

export default CardPost