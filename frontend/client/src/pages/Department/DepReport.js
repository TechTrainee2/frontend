import React, { useState } from 'react'
import DepStdReportCard from '../../component/department/DepStdReportCard'
import student from '../../static/Student.jpg'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function DepReport() {
  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  let user = useSelector((state) => state.user);
  let { id } = useParams();
  let[students,setStudents] = useState([{}]);
   let[value,setValue]=useState('')
  let [studentsSearch, setStudentsSearch] = useState([])


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
           
        const studentsSearch = await res.json()

        setStudentsSearch(studentsSearch);
      
       
      } catch (error) {
        console.error(error);
      }
    }

  // when the page loader

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

        const students = await res.json();

        setStudents(students)

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
         <div className='centerd-comp'>
      <div className='uni-super-title-report'>
        <span className='font-super bold'>Students Report</span>
        <input type="text" placeholder="Search Student Report" className='uni-super-search-report gray-bk ' onClick={handelOnClick} onChange={onchange}/>
      </div>


      {students.map((student) => (
      <DepStdReportCard key={student.id} student={student}/>
    ))}




      <div className={isModal?'show': 'hidden'} >
             <div className='modal-no-bk' onClick={handelOnClickX}></div> 
            <div className='search-box-left-mini'>
              {
                value!== ''&&
                studentsSearch.map((student)=>(
                  <div className='search-card gray-bk'>
                      <div className='search-img'>
                      <Link to = {`/stdAcc/${student.student.user}`}>
                          <img src={student.img} className='uni-std-circle'/>
                        </Link>
                          <div className='compsuper-std-name font-med'>
                          <Link to = {`/stdAcc/${student.student.user}`}>
                            <span >{student.student.first_name} {student.student.last_name}</span>
                          </Link>
                          </div>
                          <Link to ={`/DepStdFinalReport/${student.student.user}`}>
                            <span className='under-line font-med'>Report</span>
                          </Link>
                      </div>
                  </div>

                )
              )
              }
            </div>
        </div>
    </div>
    </>
  )
}

export default DepReport