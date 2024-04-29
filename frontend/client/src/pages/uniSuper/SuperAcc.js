import React, { useEffect, useState } from "react";
import CardSuperProf from '../../component/uniSuper/CardSuperProf'
import Navbar from '../../component/uniSuper/Navbar'
import NavbarHome from '../../component/compSuper/NavbarHome'
import NavbarMain from '../../component/company/NavbarMain'
import NavbarStd from '../../component/student/NavbarStd'
import CardSuperCont from '../../component/uniSuper/CardSuperCont'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";

function SuperAcc() {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});

  let [email, setEmail] = useState({});
  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/uniprof/${id}`, {
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
        setExtradt(profileData.university_supervisor)
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
        user.account_type == "COMPANY_SUPERVISOR" && 
          <NavbarHome id={user.id}/>
        }
          {profile && (
            <div className='centerd-comp'>
              <CardSuperProf profile={profile} extra={extradt} isSameUser={isSameUser} />
              <CardSuperCont user={email} profile={profile} extra={extradt} isSameUser={isSameUser} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SuperAcc;