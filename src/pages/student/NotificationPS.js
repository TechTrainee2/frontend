import React from 'react'
import '../../nada.css'
import CardNotification1 from '../../component/student/CardNotification1'
import CardNotification2 from '../../component/student/CardNotification2'
import CardNotification3 from '../../component/student/CardNotification3'
import NavbarStd from '../../component/student/NavbarStd'


function NotificationPS() {
  return (
    <>
    <NavbarStd/>
    <div className='uni-std-final-report'>
      <span className='notification-title bold'>Notifications</span>
      <CardNotification1/>
      <CardNotification2/>
      <CardNotification3/>
    </div>

    </>
  )
}

export default NotificationPS