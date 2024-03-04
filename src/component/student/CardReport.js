import React, { useState } from 'react'
import prof from '../../static/prof.png'
import img from '../../static/CompSuper.jpg'
import { Link } from 'react-router-dom'

function CardReport() {
    let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }
  return (
    <>
        <div className='large-card gray-bk centered-card'>
            <div className='report-container'>
                <div className='compsuper-header-report'>
                    <span className='bold'>Week 2</span>

                    <div className='compsuper-date'>
                        <span>Date from </span>
                        <span>26/2/2024 </span>
                        <span>To </span>
                        <span>4/3/2024</span>
                    </div>
                </div>
            

            <div className='compsuper-fill-report-topic '>

                <div className='fill-report-topic'>
                    <span className='bold'>Topic </span>
                    <span>Introduction to python </span>
                    <span>Introduction to Matplotlip</span>
                    <span>statistics book studying</span>
                </div>

                <div className='fill-report-topic'>
                    <span className='bold'>Software and Equipment used</span>
                    <span>datacomp.com</span>
                    <span>w3schools.com</span>
                    <span>pdf</span>
                </div>

                <div className='fill-report-topic'>
                    <span className='bold'>Hours</span> 
                    <span>4 </span>
                    <span>9</span>
                    <span>9</span>
                </div>
            
            </div>
        

        <div className='report-TotalHour bold'>
            <span>Total hours</span>
            <span>22</span>
        </div>

        <div className='std-report-status-btn'>
            <button className='button-size navy-bk white-font' onClick={handelOnClick}>Status</button>
        </div>


        </div>
        <div className={isModal?'show': 'hidden'} >
                        <div className='status-modal-bk'></div>
                        <div className='std-report-status-box'>
                            <div className='std-status-box-comp'>

                                    
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                                        <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                    
                                    <span className='bold navy-font'>Status</span>


                                <div className='card3-status gray-bk centered-card'>
                                    <div className='std-report-status-comp'>
                                        <div className='std-status-super-images'>
                                            <Link to='/stdUniSuperAcc'>
                                                <img src={prof} className='std-status-circle '/>
                                            </Link>
                                            <Link to='/stdUniSuperAcc'>
                                                <span>Kamal Ibrahim</span>
                                            </Link>
                                        </div>
                                        <button className='std-progress-btn-size light-navy-bk white-font bold'>In Progress</button>
                                    </div>
                                </div>

                                <div className='card3-status gray-bk centered-card'>
                                    <div className='std-report-status-comp'>
                                        <div className='std-status-super-images'>
                                            <Link to='/stdCompSuperAcc'>
                                                <img src={img} className='std-status-circle'/>
                                            </Link>
                                            <Link to='/stdCompSuperAcc'>
                                                <span>Ahamd</span>
                                            </Link>
                                        </div>
                                        <button className='std-progress-btn-size navy-bk white-font bold'>Approved</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
        </div>
    </>
  )
}

export default CardReport