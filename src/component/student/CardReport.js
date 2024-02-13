import React from 'react'
import img from '../../static/CompSuper.jpg'

function CardReport() {
  return (
    <>
    <span className='std-report-page a'>Reports</span>
    <div className='card2 gray-bk centered-card'>
         <div className='std-report-comp'>
            <span className='std-report-header bold a'>Week 1</span>
    
            <div className='std-report-images'>
                <img src={img} className='std-circle-super std-super-profile'/>
            </div>

            <div className='std-txt-left-supervisor'>
                <div className='std-supervisor-name'>

                    <div className='txt-std-name'>
                        <span>Ahmad</span>
                        <span>React Developer</span>
                    </div>
                </div>
            </div>

            <p>This week we covered basic topics html ,css and js and made simple project for portfolio website </p>
        </div>
    </div>
    </>
  )
}

export default CardReport