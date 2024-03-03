import React from 'react'
import CardProfile from '../../component/company/CardProfile'
import CardCompBio from '../../component/student/CardCompBio'
import CardCompPost from '../../component/student/CardCompPost'
import NavbarMain from '../../component/company/NavbarMain'

function AccountC() {
  return (
    <>
    <NavbarMain/>
    <div className='centerd-comp'>
        <span className='super bold'>My Account</span>
    </div>
    <CardProfile/>
    <CardCompBio/>
    <CardCompPost/>
    </>
  )
}

export default AccountC