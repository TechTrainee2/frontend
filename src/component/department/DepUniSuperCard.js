import React from 'react'
import student from '../../static/prof.png'
import { Link } from 'react-router-dom'

function DepUniSuperCard() {
  return (
    <>
    <Link to='/uniSuperStd' className='card3 gray-bk '>
        
            <div className='std-info-svg'>
                <div className='uni-std-img-info'>
                    <img src={student} className='uni-std-circle'/>
                    <div className='uni-std-report-info'>
                        <span>Kamal Ibrahim</span>
                        <span>CS Professor</span>
                    </div>                       
                </div>
                    
            </div>
        
    </Link>

    </>
  )
}

export default DepUniSuperCard