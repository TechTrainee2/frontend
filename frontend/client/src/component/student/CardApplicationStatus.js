import React from 'react'

function CardApplicationStatus(props) {
  return (
    <>
    <div>
        <div className='std-Application-container'>
            <div className='std-application-comp'>
                <div className='blue-circle'></div>
                <div className='std-application-card gray-bk centered-card'>
                <div className='std-notification-comp'>
                    <span>Company Status : {props.application.company_status}</span>
                </div>
                </div>
            </div>
        </div>

        <div className='std-Application-container'>
        <div className='std-application-comp'>
            <div className='blue-circle'></div>
            <div className='std-application-card gray-bk centered-card'>
                <div className='std-notification-comp'>
                    <span>University Supervisor Status : {props.application.university_supervisor_status}</span>
                </div>
            </div>
        </div>
        </div>

        <div className='std-Application-container'>
        <div className='std-application-comp'>
            <div className='blue-circle'></div>
            <div className='std-application-card gray-bk centered-card'>
                <div className='std-notification-comp'>
                    <span>Department Status : {props.application.university_supervisor_status}</span>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default CardApplicationStatus