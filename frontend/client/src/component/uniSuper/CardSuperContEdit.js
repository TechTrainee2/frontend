import React, { useState } from 'react'
import { useSelector} from 'react-redux';
function CardSuperContEdit(props) {
let [phone, setPhone]=useState(props.extra.phone)
// let [email, setEmail]=useState(props.profile.student) 
let [address, setAddress]=useState(props.extra.location)    
const { user } = useSelector(
    state => state.user
);   
       
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
                    onChange={props.onChange}/>
            </div>

            <div>
                <span className='std-span-info'>Email </span>
                <span>{user.email}</span>
            </div>

            <div>
                <span className='std-span-info'>Address</span>
                <input type='text' name='address' className='std-data'
                    value={address} 
                    onChange={props.onChange}/>
            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default CardSuperContEdit