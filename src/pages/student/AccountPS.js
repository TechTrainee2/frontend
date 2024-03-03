import React from 'react'
import CardProfile from '../../component/student/CardProfile'
import CardSkill from '../../component/student/CardSkill'
import CardContact from '../../component/student/CardContact'
import NavbarStd from '../../component/student/NavbarStd'

function AccountPS() {
  return (
    <>
    <NavbarStd/>
    <CardProfile/>
    <CardSkill/>
    <CardContact/>
    </>
  )
}

export default AccountPS