import React from 'react'
import NavbarAcc from '../../component/company/NavbarAcc'
import CardProfile from '../../component/company/CardProfile'
import CardCompBio from '../../component/student/CardCompBio'
import CardCompPost from '../../component/student/CardCompPost'

function AccountC() {
  return (
    <>
    <NavbarAcc/>
    <CardProfile/>
    <CardCompBio/>
    <CardCompPost/>
    </>
  )
}

export default AccountC