import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarMain from '../../component/company/NavbarMain'
import compSuper from '../../static/CompSuper.jpg'
import CompAssignCard from '../../component/company/CompAssignCard'
import student from '../../static/Student.jpg'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// import user from '../../features/user'


function CompAssignStd() {

    let { id } = useParams();
  
    let [profile, setProfile] = useState({});
    let [extradt, setExtradt] = useState({});
    let [email, setEmail] = useState({});
    let [Students,setStudents] = useState([]);
  
    // // Get the profile by id
    let { user ,loading} = useSelector((state) => state.user);

    let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companysuperprof/get/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const res2 = await fetch(`http://127.0.0.1:8000/users/user/companysuper/${id}/students`, {
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
        setExtradt(profileData.company_supervisor)
        setStudents(Students);
        console.log(profileData);
        // if (user.id == id) {
        //   setIsSameUser(true);
        // }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user]); 



  // let { user, loading } = useSelector((state) => state.user);

  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
      <>
        <NavbarMain id={user.id}/>
        <div  className='dep-uni-sup-container'>
          <div className='uni-super-assign'>
            <div className='uni-std-img-info'>
            <Link to={`/CompSuperAcc/${extradt.user}`}>
              <img src={profile.img} className='company-img'/>
            </Link>
              <div className='uni-std-report-info'>
              <Link to={`/CompSuperAcc/${extradt.user}`}>
                <span className='super'>{extradt.first_name} {extradt.last_name}</span>
              </Link>
              </div>
            </div>
            <button className='comp-assign-button-size navy-bk white-font' onClick={handelOnClick}>Assign student</button>
          </div>
          
          <div className='dep-uni-std-span-card'>
            <span className='bold assign-padding-span'>Current Student</span>

            {Students.map((Student) => (
              <CompAssignCard  key={Student.id} Student={Student}/>
            ))}
            </div>





            
            <div className={isModal?'show': 'hidden'} >
                  <div className='modal-bk' onClick={handelOnClickX}></div> 
                  <div className='search-box-left-mini-50 '>
                  <input type="text" placeholder="Search Student Report" className='comp-search-assign-btn gray-bk ' onClick={handelOnClick}/>
                      <div className='assign-card gray-bk'>
                          <div className='search-img'>
                              <img src={student} className='uni-std-circle'/>
                              <div className='compsuper-std-name'>
                                  <span >Mohammad Saleh</span>
                                  <span >CS</span>
                              </div>
                              <button className='comp-assign-search-button-size navy-bk white-font font-med'>Assign</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
      )}
    </>
  );
}
export default CompAssignStd