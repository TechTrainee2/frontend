import React, { useState } from 'react'
import student from "../../static/Student.jpg";
import company from "../../static/company.jpg";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function CardStdApplication(props) {
  
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [profileCompany, setProfileCompany] = useState({});
  let [extradtCompany, setExtradtCompany] = useState({});
  let [email, setEmail] = useState({});
  const [post, setPost] = useState([]);

  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${props.application.student}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        const res2 = await fetch(`http://127.0.0.1:8000/users/userEmail/${props.application.student}/`, {
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
        const emailD = await res2.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.student)
        setEmail(emailD)
        console.log(emailD);

       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [props.application.student]); // Include dependencies in the dependency array

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/post/${props.application.post}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const post = await response.json();
        console.log(post);
        setPost(post);
        // Here you can set the posts to your state or dispatch an action to update your Redux store
        // For example:
        // setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPost();
  }, [props.application.post]);



  useEffect(() => {
    const fetchDataComp = async () => {
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
 
        

        const profileCompany = await res.json();

        setProfileCompany(profileCompany)
        setExtradtCompany(profileCompany.company)
        // setEmail(emailD)


        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchDataComp();
  }, [props.application.company]); // Include dependencies in the dependency array
  return (
    <>
      <div className="large-card gray-bk centered-card margin-bottom">
      
        <div className="supr-std-app">

          <div className="supr-std-app-img">
            <Link to={`/stdAcc/${props.application.student}`}>
            <img src={profile.img} className="comp-std-circle" />
            </Link>
            <div>
            <Link to={`/stdAcc/${props.application.student}`}>
              <span className="bold">{extradt.first_name} {extradt.last_name}</span>
            </Link>
              <p>Has applied to the following training program:</p>
            </div>
          </div>

          <div className="app-button">
          
            <Link to={`/stdAcc/${props.application.student}`} className="navy-font">
            <button className="button-size-std navy-bk white-font" >
              Set to interview
            </button>
          </Link>
            <a href={profile.cv} target='_blank'>
              <button className="button-size-std navy-bk white-font">
                View CV
              </button>
            </a>
          </div>
          <div className="comp-company-post">

            <div className="company-post-img">
              <span>
                <img src= {profileCompany.img} className="comp-company-img"/>
              </span>
              <span>{extradtCompany.name}</span>
              <div className='comp_application_view_std'>
              <span className='bold' >{post.title} </span>
              <span>{post.training_mode}</span>
            </div>
            </div>
              <p className='detail_post_comp_view'>
              {post.post_details} 
              </p>
          
            
          </div>
        </div>
 
      </div>
    </>
  );
}

export default CardStdApplication;
