import React from 'react'
import CardApplications from '../../component/student/CardApplications'
import NavbarStd from '../../component/student/NavbarStd'
import SmallNavbar from '../../component/student/SmallNavbar'
import TopHeader from '../../component/student/TopHeader'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ApplicationsPS() {
  let { id } = useParams();
  const [applications, setApplications] = useState([]);

  let { isAuthenticated, loading,user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/company/student/trainingApplications/${user.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Application');
        }
        const applications = await response.json();
        console.log(applications);
        setApplications(applications);
        // Here you can set the Application to your state or dispatch an action to update your Redux store
        // For example:
        // setApplication(Application);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchApplications();
  }, [id,user.id]);
      return (
        <>
        {loading ? (
          <div>spinner</div>
        ) : (
          <>
            <NavbarStd id={user.id}/>
            <TopHeader/>
            <SmallNavbar id={user.id}/>
            <div className='uni-std-final-report large-margin-bottom-phone'>
              <span className='application-title bold'>Applications</span>
              {applications.map((application) => (
              <CardApplications key={application.id} application={application} />
            ))}
            </div>
        </>
          )}
        </>
      );
    }

    export default ApplicationsPS;