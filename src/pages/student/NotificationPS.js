import React from 'react'

import CardNotification1 from '../../component/student/CardNotification1'
import CardNotification2 from '../../component/student/CardNotification2'
import NavbarStd from '../../component/student/NavbarStd'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'


function NotificationPS() {
  return (
    <>
    <NavbarStd/>
    <TopHeader/>
    <SmallNavbar/>
    <div className='uni-std-final-report large-margin-bottom-phone'>
      <span className='notification-title bold'>Notifications</span>
      <CardNotification1/>
      <CardNotification2/>
    </div>

    </>
  )
}

export default NotificationPS