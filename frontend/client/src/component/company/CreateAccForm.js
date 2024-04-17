import React from 'react'
import { Link } from 'react-router-dom'

function CreateAccForm(props) {
  return (
    <>
    <div className=' gap margin-bottom' >
        <span className='bold super title-add-super'>Add Supervisor</span>
        <form className='form-inputs' onSubmit={props.onSubmit}>
            <div className='sm-input'>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='First Name' onChange={props.onChange}/>
                <input className='form-cell form-cell-sm gray-bk opacity center-place-holder' placeholder='Last Name' onChange={props.onChange}/>
            </div>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Email' onChange={props.onChange}/>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Password' onChange={props.onChange}/>
            <input className='form-cell form-cell-la gray-bk opacity left-place-holder' placeholder='Position' onChange={props.onChange}/>
            
            <div className='form-btns'>
                <button className='button-size-input navy-bk gray-font'>Add</button>
                <Link to='/compSuper'>
                    <button className='button-size-input navy-bk gray-font'>Cancel</button>
                </Link>
            </div>

        </form>
    </div>
    </>
  )
}

export default CreateAccForm