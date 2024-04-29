import React, { useEffect, useState } from "react";
import NavbarMain from '../../component/company/NavbarMain'
import CompStdCard from '../../component/company/CompStdCard'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function CompStd() {
  let { id } = useParams();
  let { user, loading } = useSelector((state) => state.user);
  let [Students,setStudents] = useState([]);
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [data,setData]=useState({
    'company':'',
    })
    let onChange = (e) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      
      setData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/user/company/${user.id}/students`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const Students = await response.json();
        console.log(Students);
        setStudents(Students);
        // Here you can set the posts to your state or dispatch an action to update your Redux store
        // For example:
        // setPosts(posts);
      } catch (error) {
        console.error(error);
      }

    };
  
    fetchStudents();
  }, [id,user.id]);
 
  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Create an object that only includes fields from data that are not empty strings
    const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
      if (value !== '') {
        newData[key] = value;
      }
      return newData;
    }, {});
  
    // Use nonEmptyData in your fetch request
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/user/student/assign/company/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          'company':null,
        }),
      });
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
      console.log(user.id);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
          <form onSubmit={onSubmit}>
           <CompStdCard  key={Student.id} Student={Student}/>
        </form>
      ))}
    </div>
        
    </>
  )
}

export default CompStd