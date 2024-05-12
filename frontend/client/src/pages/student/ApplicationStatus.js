import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NavbarStd from '../../component/student/NavbarStd'
import CardApplicationStatus from '../../component/student/CardApplicationStatus'
import { useParams } from 'react-router-dom'
import TopHeader from '../../component/student/TopHeader'
import SmallNavbar from '../../component/student/SmallNavbar'


function ApplicationStatus() {
    let { id } = useParams();
    const [application, setApplication] = useState([]);
  
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
            <NavbarStd id={user.id}/>
            <TopHeader/>
          <SmallNavbar id={user.id}/>
            <div className='uni-std-final-report large-margin-bottom-phone'>
              <span className='application-title bold'>Application Status</span>
              
              
              <CardApplicationStatus application={application}/>
            {/*  */}
            </div>
        </>
    )
}

export default ApplicationStatus