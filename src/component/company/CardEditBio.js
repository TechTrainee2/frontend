import React from 'react'
import { useState } from 'react';

function CardEditBio() {
    let [inputValue, setInputValue] = useState('A full stack company that do websites and systems  ');
      
        let handleChange = (event) => {
          setInputValue(event.target.value);
        };
  return (
    <>
     <div className='large-card gray-bk centered-card'>
        <div className='comp-bio-comp'>
            <span className='bold'>About Us</span>

            <input type='text' name='Skill' className='comp-bio'
                    value={inputValue} 
                    onChange={handleChange}/>

        </div>
    </div>
    </>
  )
}

export default CardEditBio