import React, { useState } from 'react'
import DepStdReportCard from '../../component/department/DepStdReportCard'
import student from '../../static/Student.jpg'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
        <input type="text" placeholder="Search Student Report" className='uni-super-search-report gray-bk ' onClick={handelOnClick}/>
      </div>


      {students.map((student) => (
      <DepStdReportCard key={student.id} student={student}/>
    ))}




      <div className={isModal?'show': 'hidden'} >
             <div className='modal-no-bk' onClick={handelOnClickX}></div> 
            <div className='search-box-left-mini'>
                <div className='search-card gray-bk'>
                    <div className='search-img'>
                        <img src={student} className='uni-std-circle'/>
                        <div className='compsuper-std-name font-med'>
                            <span>Mohammad Saleh</span>
                            <span >CS</span>
                        </div>
                        <span className='under-line font-med'>Report</span>
                     </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DepReport