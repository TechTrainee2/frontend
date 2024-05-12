import React from 'react'
import comp from '../../static/company.jpg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function CardPost(props) {
  let { id } = useParams();
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [isSameUser, setIsSameUser] = useState(false);
  let { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companyprof/${props.compId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });


        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.company)

        if (user.id == id) {
          setIsSameUser(true);
        }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user.id,id]); // Include dependencies in the dependency array
  return (
    <>
    
    <Link to= {`/stdPost/${props.post.id}`} className='dep-card-super gray-bk margin-bottom'>
        
            <div className='comp-post-container'>
                <div className='uni-std-img-info'>
                    <img src={profile.img} className='std-com-post-circle'/>
                    <span className='super ' >{extradt.name}</span>

                </div>
                <div className='std-comp-post-cont'>
                  <span className='bold font-med'>{props.post.title}</span> 
                  <span>{props.post.training_mode}</span>
                </div>                    
            </div>
        
    </Link>

    </>
  )
}

export default CardPost