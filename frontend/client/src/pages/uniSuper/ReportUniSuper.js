import React, { useState } from 'react'

import Navbar from '../../component/uniSuper/Navbar'
import CardReportSuper from '../../component/uniSuper/CardReportSuper'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ReportUniSuper() {
  let [Students,setStudents] = useState([]);
  let { id } = useParams();
  let[reports,setReports] = useState([{}]);
  let {user } = useSelector((state) => state.user);

 

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/user/universitysuper/${user.id}/students`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        // const res2 = await fetch(`http://127.0.0.1:8000/users/user/reports/${id}`, {
        //   method: "GET",
        //   headers: {
        //     Accept: "application/json",
        //   },
        // });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        // if (!res2.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        
        const Students = await res.json();
        // const reports = await res2.json();

        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setStudents(Students);
        // setReports(reports)
  

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []);


  return (
    <>
    <Navbar/> 
    <div>   
      <div className='centerd-comp' >
        <div className='uni-super-title-report'>
          <span className='font-super bold'>Students Report</span>
        </div>
        {
        Students.map((Student) => (
        <CardReportSuper key={Student.id} Student={Student} />
        ))
        }
      </div>
    </div>
    </>
  )
}

export default ReportUniSuper