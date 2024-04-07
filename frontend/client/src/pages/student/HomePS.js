import React from 'react'
import NavbarStd from '../../component/student/NavbarStd'
import CardPost from '../../component/student/CardPost';
import SubNavbar from '../../component/student/SubNavbar';
import SmallNavbar from '../../component/student/SmallNavbar';
import TopHeader from '../../component/student/TopHeader';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../features/user";
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
function HomePS() {
  let {isAuthenticated} = useSelector(state=>state.user)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser())
  },[])

  if (!isAuthenticated)return <Navigate to="/SignIn"/>

  return (
    <>
    <NavbarStd/>
    <TopHeader/>
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