import React from 'react'
import SuperApplicationCard from '../../component/uniSuper/SuperApplicationCard'
import Navbar from '../../component/uniSuper/Navbar'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function SuperApplication() {
  let { id } = useParams();
  const [applications, setApplications] = useState([]);
  let { isAuthenticated, loading,user } = useSelector((state) => state.user);
  

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/unisuper/trainingApplications/${user.id}`);
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
  }, []);

  return (
    <>
            {loading ? (
              <div>spinner</div>
            ) : (
              <>
          <Navbar id={user.id}/>
          <div className='centerd-comp'>
            <span className='font-super bold'>Applications </span>
            {applications.map((application) => (
            application.company_status == 'APPROVED' && application.university_supervisor_status == 'PENDING' ?
            <SuperApplicationCard key={application.id} application={application}/>
            :<></>
          
         )
        )
        }
          </div> 
          </>
              )}
            </>
          );
        }

export default SuperApplication