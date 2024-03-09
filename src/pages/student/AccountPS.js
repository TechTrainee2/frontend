import React from 'react'
import CardProfile from '../../component/student/CardProfile'
import CardSkill from '../../component/student/CardSkill'
import CardContact from '../../component/student/CardContact'
import NavbarStd from '../../component/student/NavbarStd'
import SmallNavbar from '../../component/student/SmallNavbar'

function AccountPS() {
  return (
    <>
    <NavbarStd/>
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