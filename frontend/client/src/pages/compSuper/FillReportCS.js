import React from 'react'
import NavbarStdReport from '../../component/compSuper/NavbarStdReport'
import CardFillReport from '../../component/compSuper/CardFillReport'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


function FillReportCS() {


let { id } = useParams();
// let[report,setReport] = useState({});


let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }

  // Include dependencies in the dependency array


//creation of application for std to apply for a post



  return (
    <>
    <NavbarStdReport/>
    <CardFillReport id ={id}/>
    </>
  )
}

export default FillReportCS