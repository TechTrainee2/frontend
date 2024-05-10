import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import CardStdApplication from '../../component/company/CardStdApplication'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function StudentApplicationC() {

  const [application, setApplication] = useState([]);
  let { id } = useParams(); 
  let { isAuthenticated, loading,user } = useSelector((state) => state.user);
  useEffect(() => {
      const fetchApplications = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/users/company/student/trainingApplication/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch applications');
          }
          const application = await response.json();
          console.log(application);
          setApplication(application);
          // Here you can set the applications to your state or dispatch an action to update your Redux store
          // For example:
          // setapplications(applications);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchApplications();
    }, []);
  
  return (
    <>
    <NavbarMain id={user.id} />
     
    <CardStdApplication application={application}/>
    </>
  )
}

export default StudentApplicationC