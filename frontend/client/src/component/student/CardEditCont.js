import React, { useState } from 'react'

function CardEditCont(props) {
let [phone, setPhone]=useState(props.extra.phone)
let [email, setEmail]=useState('') 
let [address, setAddress]=useState(props.extra.location)       
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
            <span className='bold font-super'>Contact Info</span>
            <div className='std-info'>

            <div>
                <span >Phone Number</span>
                <input type='text' name='phone' className='std-data'
                    value={phone} 
                    onChange={props.onChange}/>
            </div>

            <div>
                <span>Email</span>
                <span>{email}</span>
        
            </div>

            <div>
                <span>Address</span>
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

export default CardEditCont