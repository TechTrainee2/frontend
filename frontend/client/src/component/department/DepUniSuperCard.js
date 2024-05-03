import React from 'react'
import prof from '../../static/prof.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DepUniSuperCard(props) {
  let { id } = useParams();
  
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [email, setEmail] = useState({});
  let [Students,setStudents] = useState([]);

  // // Get the profile by id
  let { user ,loading} = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/uniprof/${props.uniSuper.user}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const profileData = await res.json();

        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.university_supervisor)
        console.log(profileData);
        // if (user.id == id) {
        //   setIsSameUser(true);
        // }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user]); 
  
  return (
    <>
    <div  className='dep-card-super gray-bk margin-bottom'>
        
            <div className='std-info-svg'>
                <div className='uni-std-img-info'>
                  <Link to={`/superAcc/${props.uniSuper.user}`}>
                    <img src={profile.img} className='company-img2'/>
                  </Link>
                    <div className='uni-std-report-info super'>
                    <Link to={`/superAcc/${props.uniSuper.user}`}>
                        <span>{extradt.first_name} {extradt.last_name}</span>
                    </Link>
                    </div> 
                    <div className='svg-txt'>
                    <Link to={`/uniSuperStd/${props.uniSuper.user}`}>
                        <svg className='wd40 he40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill='#1c3150' d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                        </svg>
                    </Link>
                    <Link to={`/uniSuperStd/${props.uniSuper.user}`}>
                        <span>Assign</span>
                    </Link>
                </div>                      
                </div>
                    
            </div>
        
    </div>

    </>
  )
}

export default DepUniSuperCard