import React from 'react'
import { Link } from 'react-router-dom'
import DepStdCard from '../../component/department/DepStdCard'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DepStd() {
  let { id } = useParams();

  let [student,setStudent] = useState([]);

  // // Get the profile by id
  let { user ,loading} = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/user/studentProfiles`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const studentData = await res.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setStudent(studentData)
        console.log(studentData);
        // if (user.id == id) {
        //   setIsSameUser(true);
        // }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []); 

  return (
    <>
    <NavbarHomeDep/>
    <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span '>Students</span>
            </div>
        </div>
    </div>
      {student.map((student) => (
          <DepStdCard key={student.id} student={student}/>
        ))}
    </>
  )
}

export default DepStd