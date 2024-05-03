import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DepUniSuperCard from '../../component/department/DepUniSuperCard'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'

function DepUniSuper() {
  let { id } = useParams();

  let [uniSuper,setUniSuper] = useState([]);

  // // Get the profile by id
  let { user ,loading} = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/user/universitySupervisors`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const uniSuperData = await res.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setUniSuper(uniSuperData)
        console.log(uniSuperData);
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
        <NavbarHomeDep/>
        <div className='dep-uni-sup-container'>
            <span className='bold font-super '>Supervisors</span>
            <div className='dep-uni-sup-card'>
            {uniSuper.map((uniSuper) => (
                <DepUniSuperCard key={uniSuper.id} uniSuper={uniSuper}/>
              ))}
            </div>
        </div>
    </>
  )
}

export default DepUniSuper