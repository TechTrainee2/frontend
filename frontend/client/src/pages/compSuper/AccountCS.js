import React, { useEffect, useState } from "react";
import CardProfile from '../../component/compSuper/CardProfile'
import CardContact from '../../component/compSuper/CardContact'
import NavbarHome from '../../component/compSuper/NavbarHome'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";

function AccountCS() {
  let dispatch = useDispatch();
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);
  user = {
    id: "",
  };
  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companySuperprof/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const profileData = await res.json();
        dispatch(getUser());

        if (profileData.user.id == `${id}`) {
          setIsSameUser(true);
        }
        

        // Set profile state after data is fetched
        setProfile(profileData);
        
        // Dispatch action after fetching data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [dispatch, id, user.id]); // Include dependencies in the dependency array

  return (
    <>
      {loading ? (
        <>Spinner</>
      ) : (
        <>
          <NavbarHome id={user.id} />
          {profile && (
            <div className='centerd-comp'>
              <CardProfile profile={profile} isSameUser={isSameUser}/>
              <CardContact profile={profile} isSameUser={isSameUser}/>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AccountCS;