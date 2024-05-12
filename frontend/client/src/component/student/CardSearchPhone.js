import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'

function CardSearchPhone() {
    let[value,setValue]=useState('')
    let [companys, setCompanys] = useState([]);

    onchange = async (e) => {
        setValue(e.target.value)
        try {
            const res = await fetch(`http://127.0.0.1:8000/users/company-profiles?search=${value}`, {
                method: "GET",
                headers: {
                  Accept: "application/json",
                },
              });
              if (!res.ok) {
                throw new Error("Failed to fetch data");
              }
          const companys = await res.json();
          setCompanys(companys);
         
        } catch (error) {
          console.error(error);
        }
      }
  return (
    <>
    <div className='top-search-header '>
        <div className='phone-search-cont'>
            <NavLink to ='/stdHome'  className='not-clicked'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='wd40'>
                <path fill='#686E70' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
            </NavLink>
            <input type="text" placeholder="Search.." className='search-phone-std gray-bk ' onChange={onchange}/>
        </div>
    </div>


            {value !== '' &&
                companys.map((company) => (
                    <div className='search-card gray-bk'>
                        <div className='search-img'>
                        <Link to={`/compProfile/${company.company.user}`}>
                            <img src={company.img} className='uni-std-circle'/>
                        </Link>
                            <div className='compsuper-std-name'>
                            <Link to={`/compProfile/${company.company.user}`}>
                                <span className='super'>{company.company.name}</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                ))    
            }
    </>
  )
}

export default CardSearchPhone