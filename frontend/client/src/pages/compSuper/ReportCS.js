import React from 'react'
import NavbarHome from '../../component/compSuper/NavbarHome'
import CardReport from '../../component/compSuper/CardReport'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function ReportCS() {

  // let [profile, setProfile] = useState({});
  let [Students,setStudents] = useState([]);
  let [email, setEmail] = useState({});
  let { id } = useParams();
  let { user, loading } = useSelector((state) => state.user);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res2 = await fetch(`http://127.0.0.1:8000/users/user/companysuper/${user.id}/students`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          },
        });
        
        if (!res2.ok) {
          throw new Error("Failed to fetch data");
        }
        const Students = await res2.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setStudents(Students);
        console.log(Students);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData function when component mounts
    fetchData();
  }, [user]); 

  return (
    <>
    <NavbarHome/>
    <div className='centerd-comp'>
      <div className='uni-super-title-report'>
        <span className='font-super bold'>Students Report</span>
      </div>
      {Students.map((Student) => (
          <CardReport key={Student.id} Student={Student}/>
        ))}
    </div>

    </>
  )
}

export default ReportCS