import React from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
import DepStdFinalRepCard from '../../component/department/DepStdFinalRepCard'
import NavbarHome from '../../component/department/NavbarHome'
function DepStdFinalReport() {
  return (
    <>
        <NavbarHome/>
        <DepStdFinalRepCard/>
    </>
  )
}


export default DepStdFinalReport