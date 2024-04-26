import React, { useEffect, useState } from "react";
import NavbarStdEdit from '../../component/student/NavbarStdEdit'
import CardEditProf from '../../component/student/CardEditProf'
import CardEditSkill from '../../component/student/CardEditSkill'
import CardEditCont from '../../component/student/CardEditCont'
import SmallNavbar from '../../component/student/SmallNavbar'
import EditHeader from '../../component/student/EditHeader'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


function EditPS() {
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});


  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        const res2 = await fetch(`http://127.0.0.1:8000/users/user/studentProfile/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
     

        
        if (!res2.ok) {
          throw new Error("Failed to fetch data");
        }
        const extradata = await res2.json();

        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(extradata)
        if (user.id == id) {
          setIsSameUser(true);
         
        }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
    <NavbarStdEdit id={user.id}/>
    <EditHeader/>
    <SmallNavbar/>
    {profile && (
    <form className='large-margin-bottom-phone'>
      <CardEditProf profile={profile} extra={extradt} isSameUser={isSameUser}/>
      <CardEditSkill profile={profile} extra={extradt} isSameUser={isSameUser}/>
      <CardEditCont profile={profile} extra={extradt} isSameUser={isSameUser}/>
    </form>)}
    </>
  )
}

export default EditPS