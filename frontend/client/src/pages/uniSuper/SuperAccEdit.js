import React, { useEffect, useState } from "react";
import NavbarEditAcc from '../../component/uniSuper/NavbarEditAcc'
import CardSuperProfEdit from '../../component/uniSuper/CardSuprProfEdit'
import CardSuperContEdit from '../../component/uniSuper/CardSuperContEdit'
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";

function SuperAccEdit() {
  // Grab the parameter from the url
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
    'address':''})
 
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
        const res = await fetch(`http://127.0.0.1:8000/users/uniprof/${user.id}`, {
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
        setExtradt(profileData.university_supervisor)

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
      const res2 = await fetch(`http://127.0.0.1:8000/users/uniprof/${user.id}`, {
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
        <NavbarEditAcc id={user.id}/>
        {profile && (
          <form onSubmit={onSubmit}>
            <CardSuperProfEdit profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
            <CardSuperContEdit profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
          </form>)}
        </>
  )}
  </>
  )
}

export default SuperAccEdit