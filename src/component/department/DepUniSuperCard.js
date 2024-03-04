import React from 'react'
import prof from '../../static/prof.png'
import { Link } from 'react-router-dom'

function DepUniSuperCard() {
  return (
    <>
    <Link to='/uniSuperStd' className='dep-card-super gray-bk margin-bottom'>
        
            <div className='std-info-svg'>
                <div className='uni-std-img-info'>
                    <img src={prof} className='company-img2'/>
                    <div className='uni-std-report-info super'>
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