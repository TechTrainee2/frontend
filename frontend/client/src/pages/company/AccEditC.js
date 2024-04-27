import React, { useEffect, useState } from "react";
import NavbarEdit from '../../component/company/NavbarEdit'
import CardEditAcc from '../../component/company/CardEditAcc'
import CardEditBio from '../../component/company/CardEditBio'
import CardEditPostBtn from '../../component/company/CardEditPostBtn'
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";

function AccEditC() {
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});


  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'img':'',
    'img_bk':'',
    'phone':'',
    'address':'',
    'bio':'',})
 
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
  }, []); // Include dependencies in the dependency array
  
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
      const res2 = await fetch(`http://127.0.0.1:8000/users/companyprof/${user.id}`, {
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
  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
      <>
    <NavbarEdit id={user.id}/>
    {profile && (
    <form onSubmit={onSubmit}>
    <CardEditAcc profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
    <CardEditBio profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
    <CardEditPostBtn profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
    </form>)}
    </>
  )}
  </>
  )
}

export default AccEditC