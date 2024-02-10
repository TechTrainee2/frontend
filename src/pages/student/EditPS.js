import React from 'react'
import NavbarStdEdit from '../../component/student/NavbarStdEdit'
import CardEditProf from '../../component/student/CardEditProf'
import CardEditSkill from '../../component/student/CardEditSkill'
import CardEditCont from '../../component/student/CardEditCont'

function EditPS() {
  return (
    <>
    <NavbarStdEdit/>
    <form>
      <CardEditProf/>
      <CardEditSkill/>
      <CardEditCont/>
    </form>
    </>
  )
}

export default EditPS