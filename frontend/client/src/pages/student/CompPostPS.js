import React, { useEffect, useState } from "react";
import NavbarStd from '../../component/student/NavbarStd'
import CardPostDetail from '../../component/student/CardPostDetail'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavbarMain from "../../component/company/NavbarMain";

function CompPostPS() {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  const [post, setPost] = useState({});

  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companyprof/${id}`, {
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
        console.log(user);
        console.log(user.id == id);
        if (user.id == id) {
          setIsSameUser(true);
        }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user]); // Include dependencies in the dependency array

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/company/post/${id}/`);
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
  }, []);

  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
      <>
      {
        (user.account_type == "STUDENT" ? 
          <NavbarStd id={user.id}/> : 
          user.account_type == "COMPANY" && 
          <NavbarMain id={user.id}/>
        )
      }
      {profile && (
      <>
        <CardPostDetail profile={profile} extra={extradt} isSameUser={isSameUser} post={post}/>
      </>
          )}
        </>
      )}
    </>
  );
}

export default CompPostPS