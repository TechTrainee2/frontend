import React from 'react'
import CardProfile from '../../component/student/CardProfile'
import CardSkill from '../../component/student/CardSkill'
import CardContact from '../../component/student/CardContact'
import NavbarStd from '../../component/student/NavbarStd'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'

function AccountPS() {
  return (
    <>
    <NavbarStd/>
    <TopHeader/>
    <SmallNavbar/>
    <div className='large-margin-bottom-phone'>

    <CardProfile/>
    <CardSkill/>
    <CardContact/>
    </div>

    </>
  )
}

export default AccountPS