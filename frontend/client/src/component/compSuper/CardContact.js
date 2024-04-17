import React from 'react'
import { useSelector } from 'react-redux';

function CardContact(props) {
    const { user } = useSelector(
		state => state.user
	);
  return (
    <>
    <div className='card2 gray-bk centered-card margin-bottom'>
            <div className='contact-comp-super'>
                <span className='bold'>Contact Info</span>
                <div className='std-info'>

                <div>
                    <span className='std-span-info'>Phone Number</span>
                    <span>{props.profile.phone}</span>
                </div>

                <div>
                    <span className='std-span-info'>Email</span>
                    <span>{user.email}</span>
                </div>

                <div>
                    <span className='std-span-info'>Address</span>
                    <span>{props.profile.location}</span>
                </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default CardContact