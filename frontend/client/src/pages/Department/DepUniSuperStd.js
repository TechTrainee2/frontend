import React, { useState } from 'react'
import img from '../../static/prof.png'
import DepUniAssignCard from '../../component/department/DepUniAssignCard'
import student from '../../static/Student.jpg'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function DepUniSuperStd() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }

  let { id } = useParams();
  
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [email, setEmail] = useState({});
  let [Students,setStudents] = useState([]);
  

  // // Get the profile by id
  let { user ,loading} = useSelector((state) => state.user);

  let data = {
    university_supervisor: id
  }
  // let [stdId,setStdId]=useState('')

  let[value,setValue]=useState('')
  let [studentsSearch, setStudentsSearch] = useState([]);

  onchange = async (e) => {
      setValue(e.target.value)
      try {
          const res = await fetch(`http://127.0.0.1:8000/users/student-profiles?search=${value}`, {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            });
            if (!res.ok) {
              throw new Error("Failed to fetch data");
            }
        const studentsSearch = await res.json();
        setStudentsSearch(studentsSearch);
       
      } catch (error) {
        console.error(error);
      }
    }
onclick = async (u) => {
try {

  const res = await fetch(`http://127.0.0.1:8000/users/user/student/assign/universitySupervisor/${u}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }


}catch (error) {
console.error("Error fetching data:", error);
}
fetchData()
}
const fetchData = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/users/uniprof/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const res2 = await fetch(`http://127.0.0.1:8000/users/user/universitysuper/${id}/students`, {
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
    const Students = await res2.json();
    // dispatch(getUser());
    
    // Set profile state after data is fetched
    setProfile(profileData)
    setExtradt(profileData.university_supervisor)
    setStudents(Students);

    // if (user.id == id) {
    //   setIsSameUser(true);
    // }
    
   
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {

  // Call fetchData function when component mounts
  fetchData();
}, []); 

  return (
    <>
        <NavbarHomeDep/>
        <div  className='dep-uni-sup-container'>
          <div className='uni-super-assign'>
            <div className='uni-std-img-info'>
            <Link to={`/superAcc/${id}`}>
              <img src={profile.img} className='company-img2'/>
            </Link>
              <div className='uni-std-report-info super'>
              <Link to={`/superAcc/${id}`}>
                <span>{extradt.first_name} {extradt.last_name}</span>
              </Link>
              </div>
            </div>
            <button className='button-size navy-bk white-font font-med' onClick={handelOnClick}>Assign student</button>
          </div>
          
          <div className='dep-uni-std-span-card'>
            <span className='bold assign-padding-span super'>Current Student</span>
            {Students.map((Student) => (
              <DepUniAssignCard  key={Student.id} Student={Student} fetchData={fetchData}/>
            ))}
          </div>
          <div className={isModal?'show': 'hidden'} >
                  <div className='modal-bk' onClick={handelOnClickX}></div> 
                  <div className='search-box-left-mini-50 '>

                  <input type="text" placeholder="Search Student Report" className='comp-search-assign-btn gray-bk ' onChange={onchange} onClick={handelOnClick}/>
                     
                     {
                        value !== '' &&
                        studentsSearch.map((student) => (

                        <div className='assign-card gray-bk'>
                            <div className='search-img'>
                            <Link to={`/stdAcc/${student.student.user}`}>
                                <img src={student.img} className='uni-std-circle'/>
                                </Link>
                                <div className='compsuper-std-name'>
                                <Link to={`/stdAcc/${student.student.user}`}>
                                    <span >{student.student.first_name} {student.student.last_name}</span>
                                  </Link>
                                </div>
                                <button className='comp-assign-search-button-size navy-bk white-font font-med' onClick={() => {onclick(student.student.user); setIsModal(false)}}>Assign</button>
                            </div>
                        </div>


                        ))
                     }
                  </div>
              </div>
        </div>
    </>
  )
}

export default DepUniSuperStd