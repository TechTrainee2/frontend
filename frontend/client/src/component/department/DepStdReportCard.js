import React from 'react'
import student from '../../static/Student.jpg'
import student2 from '../../static/Student2.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'


function DepStdReportCard(props) {
    let user = useSelector((state) => state.user);
  let { id } = useParams();
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
 

  // when the page loader

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

        setProfile(profileData)
        setExtradt(profileData.student)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [props.student]);
  return (
    <>


    <div className='card2 gray-bk centered-card'>
        <div className='dep-info-card-report'>
            <div className='super-std-img'>
                <Link to ={`/stdAcc/${props.student.user}`}  className='not-clicked'>
                <img src={profile.img} className='uni-std-circle'/>
                </Link>
                <div className='compsuper-std-name'>
                <Link to ={`/stdAcc/${props.student.user}`}  className='not-clicked'>
                    <span >{props.student.first_name} {props.student.last_name}</span>
                </Link>
                    {/* <span>CS</span> */}
                </div>
            </div>
                <Link to ={`/DepStdFinalReport/${props.student.user}`}  className='not-clicked'>
                    <span className='compsuper-underline'>Final Report</span>
                </Link>
        </div>
            
    </div>

    </>
  )
}

export default DepStdReportCard