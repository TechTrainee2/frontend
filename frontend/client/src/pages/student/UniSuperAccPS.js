import React from 'react'
import NavbarStd from '../../component/student/NavbarStd'
import CardUniSuperAcc from '../../component/student/CardUniSuperAcc'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UniSuperAccPS() {
  let { id } = useParams();
  let { user } = useSelector((state) => state.user);
  return (
    <>
    <NavbarStd/>
    <TopHeader/>
    <SmallNavbar id={user.id}/>
    <CardUniSuperAcc/>
    </>
  )
}

export default UniSuperAccPS