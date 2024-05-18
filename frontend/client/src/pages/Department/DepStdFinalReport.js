import React from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
import DepStdFinalRepCard from '../../component/department/DepStdFinalRepCard'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'


function DepStdFinalReport() {
  let user = useSelector((state) => state.user);
  let { id } = useParams();
  let[reports,setReports] = useState([{}]);
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
 

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
        const res2 = await fetch(`http://127.0.0.1:8000/users/stdprof/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const reports = await res.json();
        const profileData = await res2.json();

        setReports(reports)
        setProfile(profileData)
        setExtradt(profileData.student)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [id,user.id,user]);
  return (
    <>
        <NavbarHomeDep/>

        <div className='compsuper-std-report-cont'>
        <div className='compsuper-std-name-cont'>
          <Link to ={`/stdAcc/${id}`}  className='not-clicked'>
                    <img src={profile.img} className='uni-std-circle'/>
          </Link>
                    <div className='compsuper-std-name'>
          <Link to ={`/stdAcc/${id}`}  className='not-clicked'>
                        <span >{extradt.first_name} {extradt.last_name}'s Report</span>
          </Link>
                    </div>
        </div>

        </div>

        {reports.length === 0 ? (
          <div className='red-font centered-card' >There is No Reports Yet</div> 
        ) :
        reports.map((report) => (
          report.universitySupervisorSignature == null ? (
            <></> 
          ) :
          <DepStdFinalRepCard key={report.id} report={report} />
        ))}
    </>
  )
}


export default DepStdFinalReport