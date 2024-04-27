import React, { useState } from 'react'

function CardEditContact(props) {
let [phone, setPhone]=useState(props.profile.phone)
let [email, setEmail]=useState('') 
let [address, setAddress]=useState(props.profile.location)       
        let handleChangePhone = (event) => 
          setPhone(event.target.value);
          let handleChangeEmail = (event) => 
          setEmail(event.target.value);
          let handleChangeAddress = (event) => 
          setAddress(event.target.value);
  return (
    <>
    <div className='large-card gray-bk centered-card margin-bottom'>
        <div className='contact-comp'>
            <span className='bold'>Contact Info</span>
            <div className='std-info'>

            <div>
                <span className='std-span-info'>Phone Number</span>
                <input type='text' name='phone' className='std-data'
                    value={phone} 
                    onChange={props.onChange}/>
            </div>

            <div>
                <span className='std-span-info'>Address</span>
                <input type='text' name='location' className='std-data'
                    value={address} 
                    onChange={props.onChange}/>
            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default CardEditContact