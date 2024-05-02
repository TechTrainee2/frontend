import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function CardApplications(props) {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  const [posts, setPosts] = useState([]);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companyprof/${props.application.company}`, {
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
        setExtradt(profileData.company)
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []); // Include dependencies in the dependency array

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/post/${props.application.post}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        console.log(posts);
        setPosts(posts);
        // Here you can set the posts to your state or dispatch an action to update your Redux store
        // For example:
        // setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPosts();
  }, [id,user.id]);
  
return (
  <>
  
  <Link to= {`/studentApplicationStatus/${props.application.id}`} className='application-card  gray-bk margin-bottom'>
      
          <div className='comp-post-container'>
              <div className='uni-std-img-info'>
                  <img src={profile.img} className='std-com-post-circle'/>
                  <span className='super'>{extradt.name}</span>

              </div>
              <div className='std-comp-post-cont'>
                <span className='bold font-med'>{posts.title}</span> 
                <span>{posts.training_mode}</span>
              </div>                    
          </div>
      
  </Link>

  </>
)
}

export default CardApplications

