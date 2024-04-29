import React from 'react'
import { useSelector} from 'react-redux';

function CardContact(props) {
    const { user } = useSelector(
		state => state.user
	);
  return (
    <>
    <div className='large-card gray-bk centered-card'>
        <div className='contact-comp'>
            <span className='bold font-super'>Contact Info</span>
            <div className='std-info'>

            <div>
                <span className='super'>Phone Number</span>
                <span>{props.profile.phone}</span>
            </div>

            <div>
                <span className='super'>Email</span>
                <span>{props.user.email}</span>
            </div>

            <div>
                <span className='super'>Address</span>
                <span>{props.profile.location}</span>
            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default CardContact