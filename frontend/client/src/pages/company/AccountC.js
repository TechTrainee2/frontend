import React, { useEffect, useState } from "react";
import CardProfile from '../../component/company/CardProfile'
import CardCompBio from '../../component/student/CardCompBio'
import CardCompPost from '../../component/student/CardCompPost'
import Navbar from '../../component/uniSuper/Navbar'
import NavbarHome from '../../component/compSuper/NavbarHome'
import NavbarMain from '../../component/company/NavbarMain'
import NavbarStd from '../../component/student/NavbarStd'
import NavbarReg from '../../component/Regestration/NavbarReg'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import TopHeader from "../../component/student/TopHeader";
import SmallNavbar from "../../component/student/SmallNavbar";

function AccountC() {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  const [posts, setPosts] = useState([]);
  let [email, setEmail] = useState({});
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

        const res2 = await fetch(`http://127.0.0.1:8000/users/userEmail/${id}/`, {
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
        setExtradt(profileData.company)
        setEmail(emailD)

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
  }, [id,user.id]); // Include dependencies in the dependency array

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/posts/${id}`);
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
      {loading ? (
        <>Spinner</>
      ) : (
        <>
          {
       user.account_type == "STUDENT" ? 
       <NavbarStd id={user.id}/> : 
     user.account_type == "COMPANY" ? 
       <NavbarMain id={user.id}/> :
     user.account_type == "UNIVERSITY_SUPERVISOR" ? 
       <Navbar id={user.id}/> :
     user.account_type == "DEPARTMENT" ? 
       <NavbarHomeDep id={user.id}/> :
     user.account_type == "REGISTRATION" ? 
       <NavbarReg id={user.id}/> :
     user.account_type == "COMPANY_SUPERVISOR" && 
       <NavbarHome id={user.id}/>
        }

        <TopHeader/>
        <SmallNavbar id={user.id}/>
          
            <>
              <CardProfile user={email}  id={user.id} profile={profile} extra={extradt} isSameUser={isSameUser}/>
              <CardCompBio profile={profile} extra={extradt} />
              {posts.map((post) => (
                <CardCompPost  profile={profile} extra={extradt}  key={post.id} post={post}/>
              ))}
            </>
          
        </>
      )}
    </>
  );
}

export default AccountC;