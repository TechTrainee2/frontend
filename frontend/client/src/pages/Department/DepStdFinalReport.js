import React from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
import DepStdFinalRepCard from '../../component/department/DepStdFinalRepCard'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
function DepStdFinalReport() {
  return (
    <>
        <NavbarHomeDep/>
        <DepStdFinalRepCard/>
    </>
  )
}


export default DepStdFinalReport