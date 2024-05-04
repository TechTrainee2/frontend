import React from 'react'
import NavbarReg from '../../component/Regestration/NavbarReg'
import CardStdBtn from '../../component/Regestration/CardStdBtn'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerStd } from '../../features/user'
import { Link } from 'react-router-dom'

export default function Student() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const {user } = useSelector(state => state.user);
  const [isEmailError,setIsEmailError]= useState(false)
  const [EmailError,setEmailError]= useState([])
  const [isPasswordError,setIsPasswordError]= useState(false)
  const [PasswordError,setPasswordError]= useState([])
  let [students,setstudents] = useState([]);

  // // Get the profile by id
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
        setstudents(studentData)
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user]); 

  return (
    <>
    <NavbarReg/>
    <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Students</span>
            </div>
            <Link to='/RegStdForm'>
            <button className='std-progress-btn-size navy-bk white-font bold' >Add Student</button>
            </Link>
        </div>
    </div>
    {students.map((student) => (
    <CardStdBtn  key={student.id} student={student}/>
  ))}
    </>
  )
}
