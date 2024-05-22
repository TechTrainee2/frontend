import React from 'react'
import NavbarStd3 from '../../component/student/NavbarStd3'
import CardReport from '../../component/student/CardReport'
import SmallNavbar from '../../component/student/SmallNavbar'
import ReportHeader from '../../component/student/ReportHeader'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import TopHeader from '../../component/student/TopHeader'


function ReportPS() {
  let user = useSelector((state) => state.user);
  let { id } = useParams();
  let[reports,setReports] = useState([{}]);
 

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/user/reports/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const reports = await res.json();

        setReports(reports)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [id,user.id,user]);

  return (
    <>
    <NavbarStd3 id={id}/>
    <TopHeader/>
    <SmallNavbar id={id}/> 
     { reports.length === 0?
      <div className='red-font centered-card' >There is No Reports Yet</div>
      :
    reports.map((report) => (
      
      <CardReport key={report.id} report={report}/>
    ))}
    </>
  )
}

export default ReportPS