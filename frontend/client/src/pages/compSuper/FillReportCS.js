import React from 'react'
import NavbarStdReport from '../../component/compSuper/NavbarStdReport'
import CardFillReport from '../../component/compSuper/CardFillReport'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


function FillReportCS() {


let { id } = useParams();
// let[report,setReport] = useState({});


let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});

  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/user/studentProfile10/${id}`, {
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
        setExtradt(profileData.student)
        
       
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [id,user.id]);
  



  // Include dependencies in the dependency array


//creation of application for std to apply for a post



  return (
    <>
    <NavbarStdReport/>
    <CardFillReport profile={profile} extra={extradt} id ={id}/>
    </>
  )
}

export default FillReportCS