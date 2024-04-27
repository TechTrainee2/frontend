import React, { useEffect, useState } from "react";
import NavbarStdEdit from '../../component/student/NavbarStdEdit'
import CardEditProf from '../../component/student/CardEditProf'
import CardEditSkill from '../../component/student/CardEditSkill'
import CardEditCont from '../../component/student/CardEditCont'
import SmallNavbar from '../../component/student/SmallNavbar'
import EditHeader from '../../component/student/EditHeader'
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';



function EditPS() {

  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});


  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'bio':'',
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
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        // const res2 = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
        //   method: "PATCH",
        //   headers: {
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(data),
        // });


        // res4=res2
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();

        // if (!res2.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        
        // const Data = await res2.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.student)
        // setData(Data)

        if (user.id == id) {
          setIsSameUser(true);
        //  console.log(Data);
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
      const res2 = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
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
    <NavbarStdEdit id={user.id}/>
    <EditHeader/>
    <SmallNavbar/>
    {profile && (
    <form className='large-margin-bottom-phone' onSubmit={onSubmit}>
      <CardEditProf profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
      <CardEditSkill profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
      <CardEditCont profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
    </form>)}
    </>
  )}
  </>
  )
}

export default EditPS