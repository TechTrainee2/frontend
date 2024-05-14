import React from "react";
import NavbarStd from "../../component/student/NavbarStd";
import CardPost from "../../component/student/CardPost";
import SubNavbar from "../../component/student/SubNavbar";
import SmallNavbar from "../../component/student/SmallNavbar";
import TopHeader from "../../component/student/TopHeader";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HomePS() {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);

  let { isAuthenticated, loading,user } = useSelector((state) => state.user);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/company/posts`);
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
  }, []);

  return (
    <>
      {loading ? (
        <div>spinner</div>
      ) : (
        <>
          <NavbarStd id={user.id}/>
          <TopHeader/>
          <SmallNavbar id={user.id}/>
          <div className="dep-uni-sup-container">
         
            {/* <SubNavbar posts={posts} /> */}
          
            <div className="dep-uni-sup-card">
            {posts.map((post) => (
                <CardPost key={post.id} post={post} compId={post.company}/>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePS;
