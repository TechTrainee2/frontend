import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import { useEffect } from "react";
import NavbarHome from '../../component/compSuper/NavbarHome'
import CardStudent1 from '../../component/compSuper/CardStudent1'
import CardStd2 from '../../component/compSuper/CardStd2'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function HomeCS() {
  let {loading,user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  let { id } = useParams();
  
  let [Students,setStudents] = useState([]);


  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }


useEffect(() => {
  const fetchData = async () => {
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/user/companysuper/${user.id}/students`, {
        method: "GET",
        headers: {
          Accept: "application/json",
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
    {loading ? (
        <div>spinner</div>
      ) : (
        <>
    <NavbarHome id={user.id}/>
    <div className='centerd-comp'>
      <span className='font-super bold'>Current Students </span>
      {Students.map((Student) => (
          <CardStudent1 key={Student.id} Student={Student}/>
        ))}
    </div>
    </>
      )}
    </>
  );
}

export default HomeCS;