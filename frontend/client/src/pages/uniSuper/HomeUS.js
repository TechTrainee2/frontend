import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import { useEffect } from "react";
import Navbar from '../../component/uniSuper/Navbar'
import CardHomeUS from '../../component/uniSuper/CardHomeUS'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function HomeUS() {
  let {loading,user } = useSelector((state) => state.user);
  const [cookies, setCookie] = useCookies(['access']);

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
      const res2 = await fetch(`http://127.0.0.1:8000/users/user/universitysuper/${user.id}/students`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${cookies.access}`,
        },credentials:'include'
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
}, [user, user.id]); 

  return (
    <>
    {loading ? (
        <div>spinner</div>
      ) : (
        <>
    <Navbar id={user.id}/>
    <div className='centerd-comp'>
        <span className='font-super bold'>Current Students </span>
        {Students.map((Student) => (
          <CardHomeUS key={Student.id} Student={Student}/>
        ))}
    </div>
    </>
      )}
    </>
  );
}

export default HomeUS;