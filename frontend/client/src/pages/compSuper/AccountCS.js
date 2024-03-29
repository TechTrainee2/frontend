import React from 'react'
import CardProfile from '../../component/compSuper/CardProfile'
import CardContact from '../../component/compSuper/CardContact'
import NavbarHome from '../../component/compSuper/NavbarHome'

function AccountCS() {
  return (
    <>
    <NavbarHome/>
    <div className='centerd-comp'>
          <span className='font-super bold'>My Account </span>
          <CardProfile/>
          <CardContact/>
      </div>
    
    </>
  )
}

export default AccountCS