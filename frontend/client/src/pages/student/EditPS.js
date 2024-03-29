import React from 'react'
import NavbarStdEdit from '../../component/student/NavbarStdEdit'
import CardEditProf from '../../component/student/CardEditProf'
import CardEditSkill from '../../component/student/CardEditSkill'
import CardEditCont from '../../component/student/CardEditCont'
import SmallNavbar from '../../component/student/SmallNavbar'
import EditHeader from '../../component/student/EditHeader'

function EditPS() {
  return (
    <>
    <NavbarStdEdit/>
    <EditHeader/>
    <SmallNavbar/>
    <form className='large-margin-bottom-phone'>
      <CardEditProf/>
      <CardEditSkill/>
      <CardEditCont/>
    </form>
    </>
  )
}

export default EditPS