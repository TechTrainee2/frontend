import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function DepApplicationCard(props) {
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});

  let [uniProfile, setUniProfile] = useState({});
  let [uniExtradt, setExtradtUni] = useState({});

  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${props.application.student}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const res2 = await fetch(`http://127.0.0.1:8000/users/uniprof/${props.application.university_supervisor}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        if (!res2.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();
        const uniData = await res2.json();
        
        setProfile(profileData)
        setExtradt(profileData.student)

        setUniProfile(uniData)
        setExtradtUni(uniData.university_supervisor)
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [props.application.student]); // Include dependencies in the dependency array
  return (
   
       <>
       <div className='card-std-assign gray-bk centered-card' >
          <div className='uni-sup-std-info-svg'>
              <div className='uni-std-img-info'>
                <Link to={`/stdAcc/${props.application.student}`}>
                  <img src={profile.img} className='uni-std-circle'/>
                </Link>
                  <div className='uni-std-report-info'>
                  <Link to={`/stdAcc/${props.application.student}`}>
                      <span>{extradt.first_name} {extradt.last_name}</span>
                    </Link>
                      {/* <span>CS</span> */}
                      
                  </div>
                    
              </div>
              <Link to={`/superAcc/${props.application.university_supervisor}`}>
                <span>Approved by {uniExtradt.first_name}</span>
              </Link>

              <div className='btn-link-container'>
                <Link to={`/depViewPost/${props.application.id}`}className='under-line txt-center'>
                  Student Application
                </Link>
              </div>
          </div>
     </div>
    </>
    
  )
}

export default DepApplicationCard