import React from 'react'
import NavbarReport from '../../component/uniSuper/NavbarReport'
import CardStdReport from '../../component/uniSuper/CardStdReport'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function StdReportUS() {
  let {user } = useSelector((state) => state.user);
  let { id } = useParams();
  let[reports,setReports] = useState([{}]);
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
 

  // when the page loader

  const fetchData = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/users/user/reports/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const res2 = await fetch(`http://127.0.0.1:8000/users/stdprof/${id}`, {
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

      const reports = await res.json();
      const profileData = await res2.json();


      // dispatch(getUser());
      
      // Set profile state after data is fetched

      setReports(reports)
      setProfile(profileData)
      setExtradt(profileData.student)
      console.log(reports);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {

    // Call fetchData function when component mounts
    fetchData();
  }, [id,user.id,user]);

  return (
    <>
    <NavbarReport id={user.id}/>

    <div className='compsuper-std-report-cont'>
        <div className='compsuper-std-name-cont'>
            <Link to= {`/stdAcc/${reports.student}`}>
                    <img src={profile.img} className='uni-std-circle'/>
            </Link>
                    <div className='compsuper-std-name'>
            <Link to= {`/stdAcc/${reports.student}`}>
                        <span> {extradt.first_name} {extradt.last_name}'s Report</span>
            </Link>
                    </div>
        </div>
    </div>
    { reports.length === 0?
      <div className='red-font centered-card' >There is No Reports Yet</div>
      :
      reports.map((report) => (
    <CardStdReport key={report.id} report={report} profile={profile} extradt={extradt} fetchData={fetchData}/>
    ))}
    </>
  )
}

export default StdReportUS