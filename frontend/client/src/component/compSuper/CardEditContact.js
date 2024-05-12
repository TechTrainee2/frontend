import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';

function CardEditContact(props) {
  const { user } = useSelector(
		state => state.user
	);
  const [phone, setPhone] = useState(props.profile.phone);
  const [location, setLocation] = useState(props.profile.location);

  useEffect(() => {
      setPhone(props.profile.phone);
      setLocation(props.profile.location);
  }, [props.profile.phone,props.profile.location]);

  const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };
  const handleLocationChange = (event) => {
      setLocation(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };      

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
                    onChange={handlePhoneChange}/>
            </div>
            <div>
                <span className='std-span-info'>Email </span>
                <span>{user.email}</span>
            </div>

            <div>
                <span className='std-span-info'>Address</span>
                <input type='text' name='location' className='std-data'
                    value={location} 
                    onChange={handleLocationChange}/>
            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default CardEditContact