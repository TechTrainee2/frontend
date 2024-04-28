import React, { useEffect, useState } from "react";
import NavbarEditPost from '../../component/company/NavbarEditPost'
import CardEditPost from '../../component/company/CardEditPost'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function PostEditC() {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  const [post, setPost] = useState({});

  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'title':'',
    'training_mode':'',
    'post_details':'',
    })
  // when the page loader
  
  let onChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
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
  }, [id,user.id]); // Include dependencies in the dependency array

  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Create an object that only includes fields from data that are not empty strings
    const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
      if (value !== '') {
        newData[key] = value;
      }
      return newData;
    }, {});
  
    // Use nonEmptyData in your fetch request
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/company/post/${post.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(nonEmptyData),
      });
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
      console.log(user.id);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
          <NavbarEditPost id={user.id}/>
          {profile && (
            <>
            <form onSubmit={onSubmit}>
              <CardEditPost id={user.id}
               profile={profile} 
               extra={extradt} 
               isSameUser={isSameUser} 
               onChange={onChange}/>
               </form>
            </>
          )}
       </>
          )}
        </>
        );
}

export default PostEditC