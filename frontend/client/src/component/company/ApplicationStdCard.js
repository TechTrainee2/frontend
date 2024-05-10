import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


function ApplicationStdCard(props) {
    let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});

  let [approved,setApproved]=useState({
    'company_status':'APPROVED',
    })
let [reject,setReject]=useState({
    'company_status':'REJECTED',
    })

  let [isModal,setIsModal]=useState(false) 
  let handelOnClick =()=> {
      setIsModal(true)
  }
  let handelOnClickX =()=> {
      setIsModal(false)
  }
  let [isReject,setIsReject]=useState(false) 
  let handelOnClickReject =()=> {
      setIsReject(true)
  }
  let handelOnClickXReject =()=> {
      setIsReject(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${props.application.student}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const profileData = await res.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.student)
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []); // Include dependencies in the dependency array

  const accept = async (e) => {
    e.preventDefault();
    setIsModal(false)
    // Create an object that only includes fields from data that are not empty strings
  
    // Use nonEmptyData in your fetch request
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/company/student/trainingApplication/${props.application.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(approved),
      });
      props.fetchApplications()
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const rejected = async (e) => {
    e.preventDefault();
    setIsModal(false)
    
    // Create an object that only includes fields from data that are not empty strings
  
    // Use nonEmptyData in your fetch request
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/company/student/trainingApplication/${props.application.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(reject),
      });
      props.fetchApplications()
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
     <div className='card-std-assign gray-bk centered-card' >
          <div className='uni-sup-std-info-svg'>
              <div className='uni-std-img-info'>
                <Link to={`/stdAcc/${props.application.student}`}>
                  <img src={profile.img} className='uni-std-circle'/>
                </Link>
                  <div className='uni-std-report-info'>
                  <Link to={`/stdAcc/${props.application.student}`}>
                      <span>{extradt.first_name} {extradt.last_name}</span>
                    </Link>
                      {/* <span>CS</span> */}
                      
                  </div>
                    
              </div>
              <div className='btn-link-container'>
                <Link to={`/compStdApplication/${props.application.id}`}className='under-line txt-center'>
                  Student Application
                </Link>
                <div className='comp-app-btn-container '>
                   <button className='button-size navy-bk white-font font-med' onClick={handelOnClick} >Accept</button>
                   <button className='button-size navy-bk white-font font-med' onClick={handelOnClickReject} >Reject</button>
                </div>
              </div>
        
        </div>
        <div className={isModal?'show': 'hidden'} >
          <div className='modal-bk'></div>
            <div className='apply-box'>
                <div className='apply-box-comp'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                    <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>

                    <span className='bold navy-font'>Are you sure you want to Accept?</span>

                    <div className='apply-box-btns'>
                        <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                        <button className='button-size-std navy-bk white-font' onClick={accept}>Yes</button>
                    </div>
                </div>

            </div>
        </div>
        <div className={isReject?'show': 'hidden'} >
        <div className='modal-bk'></div>
            <div className='apply-box'>
                <div className='apply-box-comp'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickXReject}>
                    <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>

                    <span className='bold navy-font'>Are you sure you want to Reject?</span>

                    <div className='apply-box-btns'>
                        <button className='button-size-std gray-bk navy-font' onClick={handelOnClickXReject}>No</button>
                        <button className='button-size-std navy-bk white-font' onClick={rejected}>Yes</button>
                    </div>
                </div>

            </div>
        </div>

          </div>
          
      
    </>
  )
}

export default ApplicationStdCard