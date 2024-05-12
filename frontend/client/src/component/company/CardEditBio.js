import React, { useState, useEffect } from 'react';

function CardEditBio(props) {
  const [bio, setBio] = useState(props.profile.bio);

  useEffect(() => {
    setBio(props.profile.bio);
  }, [props.profile.bio]);

  const handleInputChange = (event) => {
    setBio(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <>
     <div className='large-card gray-bk centered-card'>
        <div className='comp-bio-comp'>
            <span className='bold'>About Us</span>

            <input type='text' name='bio' className='comp-bio'
                value={bio} 
                onChange={handleInputChange}/>

        </div>
    </div>
    </>
  )
}

export default CardEditBio