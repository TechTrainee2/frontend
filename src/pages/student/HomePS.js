import React from 'react'
import NavbarStd from '../../component/student/NavbarStd'
import CardPost from '../../component/student/CardPost'
import SubNavbar from '../../component/student/SubNavbar'
import SmallNavbar from '../../component/student/SmallNavbar'

function HomePS() {
  return (
    <>
    <NavbarStd/>
    <SmallNavbar/>
    <div className='dep-uni-sup-container'>
      <SubNavbar/>
      <div className='dep-uni-sup-card'>
        <CardPost/>
        <CardPost/>
        <CardPost/>

        <CardPost/>

      </div>
    </div>
    </>
  )
}

export default HomePS