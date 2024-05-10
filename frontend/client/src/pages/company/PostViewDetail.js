import React, { useEffect, useState } from "react";
import NavbarStd from '../../component/student/NavbarStd'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavbarMain from "../../component/company/NavbarMain";
import CardPostViewDetail from "../../component/company/CardPostViewDetail";
import Navbar from "../../component/uniSuper/Navbar";
import NavbarHomeDep from "../../component/department/NavbarHomeDep";

function PostViewDetail() {
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

        const res3 = await fetch(`http://127.0.0.1:8000/users/companyprof/${post.company}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        
        if (!res3.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res3.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.company)
        console.log(profileData.company);



   
        // setExtradt10(profileData10)
        // console.log(profileData10);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPost();
  }, []);
 

    // Call fetchData function when component mounts


  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
      <>
      {
        (user.account_type == "STUDENT" ? 
          <NavbarStd id={user.id}/> : 
          user.account_type == "COMPANY"  ?
          <NavbarMain id={user.id}/> :
          user.account_type == "DEPARTMENT"  ?
          <NavbarHomeDep id={user.id}/> :
          user.account_type == "UNIVERSITY_SUPERVISOR" && 
          <Navbar id={user.id}/>
        )
      }
      {profile && (
      <>
        <CardPostViewDetail profile={profile} extra={extradt} isSameUser={isSameUser} post={post}/>
      </>
          )}
        </>
      )}
    </>
  );
}

export default PostViewDetail