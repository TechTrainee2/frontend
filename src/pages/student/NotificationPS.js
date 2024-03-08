import React from 'react'

import CardNotification1 from '../../component/student/CardNotification1'
import CardNotification2 from '../../component/student/CardNotification2'
import NavbarStd from '../../component/student/NavbarStd'


function NotificationPS() {
  return (
    <>
    <NavbarStd/>
    <div className='uni-std-final-report'>
      <span className='notification-title bold'>Notifications</span>
      <CardNotification1/>
      <CardNotification2/>
    </div>

    </>
  )
}

export default NotificationPS