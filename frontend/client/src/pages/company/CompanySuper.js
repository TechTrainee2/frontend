import React, { useEffect, useState } from "react";
import NavbarMain from '../../component/company/NavbarMain'
import CompanySuperCard from '../../component/company/CompanySuperCard'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function CompanySuper() {
  let { id } = useParams();
  let { user, loading } = useSelector((state) => state.user);
  let [CompSupervisors,setCompSupervisors] = useState([]);
  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [data,setData]=useState({
    'first_name':'',
    'last_name':'',
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
    const fetchcompSupers = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/user/company/${user.id}/CompSupervisors`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const CompSupervisors = await response.json();
        console.log(CompSupervisors);
        setCompSupervisors(CompSupervisors);
        // Here you can set the posts to your state or dispatch an action to update your Redux store
        // For example:
        // setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchcompSupers();
  }, [id,user.id]);
 

  // when the page loader

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
      // for the edit (didn't work ) we should create new page for edit and delete account like the creation of the compsuper account
      const res2 = await fetch(`http://127.0.0.1:8000/users/companysuperprof/${CompSupervisors[0].company_supervisor.user}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(nonEmptyData),
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



  return (
    <>
        <NavbarMain id={user.id}/>
        <div className='dep-uni-sup-container'>
            <div className='uni-super-assign'>
                <span className='font-super bold'>Supervisor</span>
                <Link to={`/addCompSuper/${user.id}`}>
                    <button className='button-size navy-bk white-font font-med'>Add supervisor</button>
                </Link>
            </div>
            {CompSupervisors.map((CompSupervisor) => (
            <CompanySuperCard key={CompSupervisor.id} CompSupervisor={CompSupervisor} onChange={onChange} onSubmit={onSubmit}/>
            ))}
        </div>
    </>
  )  
}
