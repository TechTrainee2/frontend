import React, { useEffect, useState } from "react";
import NavbarMain from '../../component/company/NavbarMain'
import CompStdCard from '../../component/company/CompStdCard'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function CompStd() {
  let { id } = useParams();
  let { user, loading } = useSelector((state) => state.user);
  let [Students,setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/users/user/company/${user.id}/students`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const Students = await response.json();
      console.log(Students);
      setStudents(Students);

    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
  
    fetchStudents();
  }, [id,user.id]);
 
 

  // when the page loader

  return (
    <>
      <NavbarMain id={user.id}/>
    <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Students</span>
            </div>
        </div>
        {Students.map((Student) => (
          
           <CompStdCard  key={Student.id} Student={Student} fetchStudents={fetchStudents}/>
        
      ))}
    </div>
        
    </>
  )
}

export default CompStd