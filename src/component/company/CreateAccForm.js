import React from 'react'
import { Link } from 'react-router-dom'

function CreateAccForm() {
  return (
    <>
    <div className=' gap margin-bottom' >
        <span className='bold super title-add-super'>Add Supervisor</span>
        <div className='form-inputs'>
            <div className='sm-input'>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='First Name'></input>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='Last Name'></input>
            </div>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Email'/>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Password'/>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Position'/>
            
            <div className='form-btns'>
                <button className='button-size-input navy-bk gray-font'>Add</button>
                <Link to='/compSuper'>
                    <button className='button-size-input navy-bk gray-font'>Cancel</button>
                </Link>
            </div>

        </div>
    </div>
    </>
  )
}

export default CreateAccForm