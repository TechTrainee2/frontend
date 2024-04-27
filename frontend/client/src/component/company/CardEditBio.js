import React from 'react'
import { useState } from 'react';

function CardEditBio(props) {
    let [inputValue, setInputValue] = useState(props.profile.bio);
      
        let handleChange = (event) => {
          setInputValue(event.target.value);
        };
  return (
    <>
     <div className='large-card gray-bk centered-card'>
        <div className='comp-bio-comp'>
            <span className='bold'>About Us</span>

            <input type='text' name='bio' className='comp-bio'
                    value={inputValue} 
                    onChange={props.onChange}/>

        </div>
    </div>
    </>
  )
}

export default CardEditBio