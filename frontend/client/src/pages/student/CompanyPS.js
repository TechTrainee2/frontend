import React from 'react'
import NavbarStd from '../../component/student/NavbarStd'
import CardCompAcc from '../../component/student/CardCompAcc'
import CardCompBio from '../../component/student/CardCompBio'
import CardCompPost from '../../component/student/CardCompPost'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


function CompanyPS() {
  let { id } = useParams();
  let { user } = useSelector((state) => state.user);

  return (
    <>
    <NavbarStd/>
    <TopHeader/>
    <SmallNavbar id={user.id}/>
    <div className='large-margin-bottom-phone'>

    <CardCompAcc/>
    <CardCompBio/>
    <CardCompPost/>
    <CardCompPost/>
    </div>
    </>
  )
}

export default CompanyPS