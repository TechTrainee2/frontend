import React, { useEffect, useState } from "react";
import CardProfile from '../../component/compSuper/CardProfile'
import CardContact from '../../component/compSuper/CardContact'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from '../../component/uniSuper/Navbar'
import NavbarHome from '../../component/compSuper/NavbarHome'
import NavbarMain from '../../component/company/NavbarMain'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import NavbarStd from '../../component/student/NavbarStd'
import NavbarReg from '../../component/Regestration/NavbarReg'
import { getUser } from "../../features/user";
import TopHeader from "../../component/student/TopHeader";
import SmallNavbar from "../../component/student/SmallNavbar";

function AccountCS() {
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
        const res = await fetch(`http://127.0.0.1:8000/users/companysuperprof/${id}`, {
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
        setExtradt(profileData.company_supervisor)
        setEmail(emailD)
        console.log(user.id == id);
        console.log(extradt);
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
        user.account_type == "DEPARTMENT" ? 
          <NavbarHomeDep id={user.id}/> :
        user.account_type == "REGISTRATION" ? 
          <NavbarReg id={user.id}/> :
        user.account_type == "COMPANY_SUPERVISOR" && 
          <NavbarHome id={user.id}/>
      }
      <TopHeader/>
      <SmallNavbar id={user.id}/>

          {profile && (
            <div className='centerd-comp'>
              <CardProfile profile={profile} extra={extradt} isSameUser={isSameUser}/>
              <CardContact user={email} profile={profile} extra={extradt} isSameUser={isSameUser}/>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AccountCS;