import React from 'react'
import '../../App.css'
import '../../malak.css'
import Navbar from '../../component/uniSuper/Navbar'
import CardHomeUS from '../../component/uniSuper/CardHomeUS'


function HomeUS() {
  return (
    <>
    <Navbar/>
    <div className='centerd-comp'>
        <span className='super bold'>Current Students </span>
        <CardHomeUS/>
    </div>
    </>
  )
}

export default HomeUS