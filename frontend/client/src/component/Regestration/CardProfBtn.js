import React, { useState } from 'react'
import prof from '../../static/prof.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function CardProfBtn(props) {
    let [isDelete,setIsDelete]=useState(false) 
    let handelOnClickDeleteYes =()=> {
        setIsDelete(true)
    }
    let handelOnClickDeleteNo =()=> {
        setIsDelete(false)
    }
    let [isEdit,setIsEdit]=useState(false) 
    let handelOnClickEditYes =()=> {
        setIsEdit(true)
    }
    let handelOnClickEditNo =()=> {
        setIsEdit(false)
    }

  let { id } = useParams();
  
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [email, setEmail] = useState({});
  let [Students,setStudents] = useState([]);

  // // Get the profile by id
  let { user ,loading} = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/uniprof/${props.uniSuper.user}`, {
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
        setExtradt(profileData.university_supervisor)
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
  

  return (
    <>
    <div className='large-card gray-bk centered-card' >
        {!isEdit?(
        <>
        <div className='reg-std-cont'>
            <div className='reg-std-info-comp'>
            <Link to={`/superAcc/${props.uniSuper.user}`}>
                <img src={profile.img} className='company-img'/>
            </Link>
                <div className='uni-std-report-info super'>
                <Link to={`/superAcc/${props.uniSuper.user}`}>
                    <span>{extradt.first_name} {extradt.last_name}</span>
                </Link>
                </div>    
            </div>           
            <div className='reg-std-btn-comp'>
                  <div className='svg-txt '>
                  <Link to={`/UniSuperEdit/${props.uniSuper.user}`}>
                  <svg className='wd40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handelOnClickEditYes}>
                    <path fill='#1c3150' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                  </svg>
                  </Link>
                  <Link to={`/UniSuperEdit/${props.uniSuper.user}`}>
                    <span  onClick={handelOnClickEditYes}>Edit</span>
                  </Link>
                  </div>
            </div>                  


        </div>
    </>
    ):(
<>
<div className='reg-std-info-comp width-90'>
                <img src={prof} className='company-img'/>
                <div className='uni-std-report-info'>
                    <input type='text'placeholder='Kamal Ibrahim ' className='reg-input-edit-super font-med light-blue-bk'/>
                    <input type='text' placeholder='CS profesor' className='reg-input-edit-super font-med light-blue-bk'/>
                </div>    
                    <button className='navy-bk white-font button-size super btn-place'onClick={handelOnClickEditNo}>Done</button>
            </div>
</>
    )}
    </div>
    </>
  )
}

export default CardProfBtn