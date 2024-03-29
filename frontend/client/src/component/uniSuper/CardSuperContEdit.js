import React, { useState } from 'react'

function CardSuperContEdit() {
let [phone, setPhone]=useState('')
let [email, setEmail]=useState('') 
let [address, setAddress]=useState('')       
        let handleChangePhone = (event) => 
          setPhone(event.target.value);
          let handleChangeEmail = (event) => 
          setEmail(event.target.value);
          let handleChangeAddress = (event) => 
          setAddress(event.target.value);
  return (
    <>
    <div className='large-card gray-bk centered-card'>
        <div className='contact-comp'>
            <span className='bold'>Contact Info</span>
            <div className='std-info'>

            <div>
                <span className='std-span-info'>Phone Number</span>
                <input type='text' name='phone' className='std-data'
                    value={phone} 
                    onChange={handleChangePhone}/>
            </div>

            <div>
                <span className='std-span-info'>Email</span>
                <input type='text' name='email' className='std-data'
                    value={email} 
                    onChange={handleChangeEmail}/>
            </div>

            <div>
                <span className='std-span-info'>Address</span>
                <input type='text' name='address' className='std-data'
                    value={address} 
                    onChange={handleChangeAddress}/>
            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default CardSuperContEdit