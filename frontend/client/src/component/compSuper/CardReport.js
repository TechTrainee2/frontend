import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function CardReport(props) {

    let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
 

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${props.Student.student.user}`, {
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
        setExtradt(profileData.student)
        console.log(profileData);
  

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []);
  return (
    <>


    <div className='card2 gray-bk centered-card'>
        <div className='super-std-card'>
            <div className='super-std-img'>
              <Link to={`/stdAcc/${props.Student.student.user}`}>
                <img src={profile.img} className='uni-std-circle'/>
              </Link>

                <div className='compsuper-std-name'>
                <Link to={`/stdAcc/${props.Student.student.user}`}>
                    <span >{extradt.first_name} {extradt.last_name}</span>
                </Link>
                </div>
            </div>
        </div>
            <NavLink to ={`/CompSuperStdReport/${props.Student.student.user}`} className='not-clicked'>
                <span className='compsuper-underline'>Report</span>
            </NavLink>
    </div>

 
    

    </>
  )
}

export default CardReport