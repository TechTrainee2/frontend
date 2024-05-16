import React, { useEffect, useState } from "react";
import NavbarNewPost from '../../component/company/NavbarNewPost'
import CardNewPost from '../../component/company/CardNewPost'
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { Navigate } from "react-router-dom";


function NewPostC() {

  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [allowNavigate, setAllowNavigate] = useState(false);


  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'title':'',
    'training_mode':'',
    'post_details':'',
    'company':`${user.id}`,
  })

  let onChange = (e) => {
    const { name, value } = e.target;
    
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  let onSelect = (e) => {
    console.log(e.target.value);
    setData((prev) => {
      return {
        ...prev,
        "training_mode": e.target.value,
      };
    });
  }

  // Rest of the code...
    // let onChange = (e) => {
    //   // console.log(e.target.value);
    //   const { name, value } = e.target;
      
    //   setData((prev) => {
    //     return {
    //       ...prev,
    //       [name]: value,
    //     };
    //   });
    // }

    const createPost = async () => {
   
    
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/company/post/${user.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error('Failed to create post');
        }
    
        const res = await response.json();
        console.log(res);
      } catch (error) {
        console.error('Error:', error);
      }
    };

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
  }, [id,user.id]); // Include dependencies in the dependency array



  
 const onSubmit = async (e) => {
    e.preventDefault();
    console.log(extradt)
  
    // Create an object that only includes fields from data that are not empty strings
    // const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
    //   if (value !== '') {
    //     newData[key] = value;
    //   }
    //   return newData;
    // }, {});
  

    setAllowNavigate(true)
  }

  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
      <>
    <NavbarNewPost id={user.id}/>
    {profile && (
      <form onSubmit={onSubmit}>
        <CardNewPost profile={profile} extra={extradt} isSameUser={isSameUser}
         onChange={onChange} 
         onClick={createPost}
         id={user.id}
          onSelect={onSelect}
         />
      </form>)}
    {allowNavigate && <Navigate to={`/compProfile/${user.id}`} />}
    </>
  )}
  </>
  )
}

export default NewPostC