import React from 'react'
import CardSuperProf from '../../component/uniSuper/CardSuperProf'
import Navbar from '../../component/uniSuper/Navbar'
import CardSuperCont from '../../component/uniSuper/CardSuperCont'

function SuperAcc() {
  return (
    <>
    <Navbar/>
      <div className='centerd-comp'>
          <span className='font-super bold'>My Account </span>
          <CardSuperProf/>
          <CardSuperCont/>
      </div>
    </>
  )
}

export default SuperAcc