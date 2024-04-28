import React, { useEffect, useState } from "react";
import CardProfile from '../../component/company/CardProfile'
import CardCompBio from '../../component/student/CardCompBio'
import CardCompPost from '../../component/student/CardCompPost'
import NavbarMain from '../../component/company/NavbarMain'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";

function AccountC() {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  const [posts, setPosts] = useState([]);

  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companyprof/${user.id}`, {
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
          <NavbarMain id={user.id} />
          {profile && (
            <>
              <CardProfile  id={user.id} profile={profile} extra={extradt} isSameUser={isSameUser}/>
              <CardCompBio profile={profile} extra={extradt} isSameUser={isSameUser}/>
              {posts.map((post) => (
                <CardCompPost profile={profile} extra={extradt} isSameUser={isSameUser} key={post.id} post={post}/>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default AccountC;