import React from 'react'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import DepApplicationCard from '../../component/department/DepApplicationCard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function DepApplication() {
  let { id } = useParams();
  const [applications, setApplications] = useState([]);

  let { isAuthenticated, loading,user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/dep/student/trainingApplications`);
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
        <NavbarHomeDep/>
        <div className='centerd-comp'>
        <span className='font-super bold'>Applications </span>
        {applications.map((application) => (
            application.company_status == 'APPROVED' && application.university_supervisor_status == 'APPROVED' 
           && application.department_status == 'PENDING'
            ?
            <DepApplicationCard key={application.id} application={application}/>:<></>
        ))}
        </div>
        </>
              )}
            </>
          );
        }

export default DepApplication