import React from 'react'
import img from '../../static/company.png'

function CardPostDetail() {
  return (
    <>
        <div className='card2 gray-bk centered-card'>
          <div className='std-post-detail' >


                <span className='std-company-profile bold'>
                  Internship Front End Developer
                </span>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <img src={img} className='company-img2' />
                  <span>Coders</span>
                  <span>Remote</span>
                </div>

                <div className='std-post-txt'>
                  <p>
                      We are offering a training opportunity for (3) <br/>
                      students on react and react native <br/> 
                      About training: <br/> 
                      you are going to learn react and react native
                      and how to code it using functions and hooks and you will take pre course for designing <br/> 
                      Qualifications: <br/>
                      -know html and css<br/>
                      -know js 
                  </p>
                </div>
              </div>

                <div className='std-apply-btn'>
                     <button className='button-size-std navy-bk white-font'>
                        Apply
                      </button>
                </div>

            </div>
            </div>
    </>
  )
}

export default CardPostDetail