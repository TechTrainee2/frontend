import React from 'react'
import NavbarEdit from '../../component/company/NavbarEdit'
import CardEditAcc from '../../component/company/CardEditAcc'
import CardEditBio from '../../component/company/CardEditBio'
import CardEditPostBtn from '../../component/company/CardEditPostBtn'

function AccEditC() {
  return (
    <>
    <NavbarEdit/>
    <form>
    <CardEditAcc/>
    <CardEditBio/>
    <CardEditPostBtn/>
    </form>
    </>
  )
}

export default AccEditC