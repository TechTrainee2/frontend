import React from 'react'
import SuperNotificationCard from '../../component/uniSuper/SuperNotificationCard'
import Navbar from '../../component/uniSuper/Navbar'

function SuperNotification() {
  return (
    <>
      <Navbar/>
      <div className='centerd-comp'>
        <span className='font-super bold'>Notifications </span>
        <SuperNotificationCard/>
    </div>
    </>
  )
}

export default SuperNotification