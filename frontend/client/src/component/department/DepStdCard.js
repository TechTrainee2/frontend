import React from 'react'
import student from '../../static/Student.jpg'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function DepStdCard(props) {
    let { id } = useParams();
  
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});

  // // Get the profile by id
  let { user ,loading} = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${props.student.user}`, {
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
        console.log(props.student.company.name);
        // if (user.id == id) {
        //   setIsSameUser(true);
        // }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []); 

  return (
    <>
        <div className='large-card gray-bk centered-card' >
            <div className='std-info-svg'>
                <div className='uni-std-img-info'>
                    <Link to={`/stdAcc/${props.student.user}`} >
                    <img src={profile.img} className='uni-std-circle'/>
                    </Link>
                    <div className='uni-std-report-info'>
                    <Link to={`/stdAcc/${props.student.user}`} >
                        <span>{extradt.first_name} {extradt.last_name}</span>  
                    </Link> 
                    </div>
                     
                </div>
                { props.student.company === null || props.student.company.name === null ? 
                    <span> No Company</span> : 
                    <Link to={`/compProfile/${props.student.company.user}`} >
                        <span>Trainee at {props.student.company.name}</span>
                    </Link>
                }
                { props.student.university_supervisor === null || props.student.university_supervisor.first_name === null ? 
                    <span> No University Supervisor</span> : 
                    <Link to={`/superAcc/${props.student.university_supervisor.user}`} >
                    <span>Supervisor {props.student.university_supervisor.first_name} {props.student.university_supervisor.last_name}</span>
                    </Link>
                }
            </div>
        </div>

    </>
  )
}

export default DepStdCard