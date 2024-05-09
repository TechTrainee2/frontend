import React, { useEffect } from 'react'
import NavbarStdReport from '../../component/compSuper/NavbarStdReport'
import CardStdReport from '../../component/compSuper/CardStdReport'
import { Link } from 'react-router-dom'
import student from '../../static/Student.jpg'
import { useParams } from "react-router-dom";
import { useState } from "react";


function StdReportCS() {

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let { id } = useParams();
  let[reports,setReports] = useState([{}]);
 

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
        const res2 = await fetch(`http://127.0.0.1:8000/users/user/reports/${id}`, {
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
        const reports = await res2.json();

        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.student)
        setReports(reports)
        console.log(reports);
  

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []);




  return (
    <>
    <NavbarStdReport/>
    <div>
    <div className='compsuper-std-report-cont'>
        <div className='compsuper-std-name-cont'>
          <Link to={`/stdAcc/${id}`}>
              <img src={profile.img} className='large-img'/>
          </Link>
          <div className='compsuper-std-name'>
            <Link to={`/stdAcc/${id}`}>
              <span className='font-super'>{extradt.first_name} {extradt.last_name}</span>
            </Link>
          </div>
        </div>

        <Link to={`/CompSuperFillReport/${id}`} >
            <button className='comp-assign-button-size navy-bk white-font'>Add Report</button>
        </Link>
    </div>
    { reports.map((report) => (
            <CardStdReport key={report.id} report={report}/>
        ))
    }
    {/* <CardStdReport/> */}
    </div>
    </>
  )
}

export default StdReportCS