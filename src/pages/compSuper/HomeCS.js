import React from 'react'
import NavbarHome from '../../component/compSuper/NavbarHome'
import CardStudent1 from '../../component/compSuper/CardStudent1'
import CardStd2 from '../../component/compSuper/CardStd2'

function HomeCS() {
  return (
    <>
    <NavbarHome/>

    <div className='centerd-comp'>
      <span className='font-super bold'>Current Students </span>
      <CardStudent1/>
    </div>
   
    </>
  )
}

export default HomeCS