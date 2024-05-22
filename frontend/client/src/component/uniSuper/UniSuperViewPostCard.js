import React, { useState } from 'react'
import student from '../../static/Student.jpg'
import company from '../../static/company.jpg'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


function UniSuperViewPostCard(props) {
  let [allowNavigate, setAllowNavigate] = useState(false);

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

  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [post, setPost] = useState({});
  let [profileCompany, setProfileCompany] = useState({});
  let [extradtCompany, setExtradtCompany] = useState({});
  let [approved,setApproved]=useState({
    'university_supervisor_status':'APPROVED',
    })
let [reject,setReject]=useState({
    'university_supervisor_status':'REJECTED',
    })
  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${props.application.student}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        const res3 = await fetch(`http://127.0.0.1:8000/users/companyprof/${props.application.company}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        const res2 = await fetch(`http://127.0.0.1:8000/users/post/${props.application.post}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        if (!res2.ok) {
          throw new Error("Failed to fetch post");
        }
        if (!res3.ok) {
          throw new Error("Failed to fetch post");
        }
        const profileData = await res.json();
        const postData = await res2.json();
        const profileCompany = await res3.json();

        setProfileCompany(profileCompany)
        setExtradtCompany(profileCompany.company)

        setProfile(profileData)
        setExtradt(profileData.student)
        setPost(postData)
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [props.application.student,props.application.post]); // Include dependencies in the dependency array

  const accept = async (e) => {
    e.preventDefault();
  
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
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
    setAllowNavigate(true);
  }

  const rejected = async (e) => {
    e.preventDefault();
  
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
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
    setAllowNavigate(true);
  }


  return (
    <>
     <div className="large-card gray-bk centered-card margin-bottom">
      
      <div className="supr-std-app">

        <div className="supr-std-app-img">
          <Link to={`/stdAcc/${props.application.student}`}>
          <img src={profile.img} className="comp-std-circle" />
          </Link>
          <div>
          <Link to={`/stdAcc/${props.application.student}`}>
            <span className="bold">{extradt.first_name} {extradt.last_name} </span>
          </Link>
            <p> Application has been accepted to:</p>
          </div>
        </div>

        <div className="app-button">
          <button className="button-size-std navy-bk white-font"  onClick={handelOnClick}>
            Accept
          </button>
          <button className="button-size-std navy-bk white-font" onClick={handelOnClickReject}>
            Reject
          </button>
        </div>
        <div className="comp-company-post">

        <div className="company-post-img">
            <span>
            <Link to={`/compProfile/${props.application.company}`}>
              <img src= {profileCompany.img} className="comp-company-img"/>
            </Link>
            </span>
            <Link to={`/compProfile/${props.application.company}`}>
            <span>{extradtCompany.name}</span>
            </Link>
            <div className='comp_application_view_std'>
            <span className='bold' >{post.title} </span>
            <span>{post.training_mode}</span>
          </div>
          </div>
            <p className='detail_post_comp_view'>
            {post.post_details} 
            </p>


      </div>
      </div>
      <form>
      <div className={isModal?'show': 'hidden'} >
        <div className='modal-bk' onClick={handelOnClickX}></div>
        <div className='unisuper-apply-box'>
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
      </form>
      {allowNavigate && <Navigate to='/superApplication'/>}

      <form>
      <div className={isReject?'show': 'hidden'} >
                        <div className='modal-bk' onClick={handelOnClickXReject}></div>
                        <div className='unisuper-apply-box' >
                            <div className='apply-box-comp'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickXReject}>
                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>

                                <span className='bold navy-font'>Are you sure u want to Reject?</span>
                              <form>
                                <div className='apply-box-btns'>
                                    <button className='button-size-std gray-bk navy-font' onClick={handelOnClickXReject}>No</button>
                                    <button className='button-size-std navy-bk white-font' onClick={rejected}>Yes</button>
                                </div>
                              </form>
                            </div>

                        </div>
                    </div>

      </form>
      {allowNavigate && <Navigate to='/superApplication'/>}
      
    </div>
    </>
  )
}

export default UniSuperViewPostCard