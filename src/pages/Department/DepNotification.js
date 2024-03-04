import React from 'react'
import NavbarHome from '../../component/department/NavbarHome'
import DepNotificationCard from '../../component/department/DepNotificationCard'

function DepNotification() {
  return (
    <>
        <NavbarHome/>
        <div className='centerd-comp'>
        <span className='font-super bold'>Notifications </span>
        <DepNotificationCard/>
        </div>
    </>
  )
}

export default DepNotification