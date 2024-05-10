import React from 'react'
import NavbarMain from '../../component/company/NavbarMain'
import ApplicationStdCard from '../../component/company/ApplicationStdCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function StdApplication() {
  let { id } = useParams();
  const [applications, setApplications] = useState([]);

  let { isAuthenticated, loading,user } = useSelector((state) => state.user);

  const fetchApplications = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/users/company/company/trainingApplications/${user.id}`);
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
  useEffect(() => {
  
    fetchApplications();
  }, [id,user.id]);
  
  return (
    <>
        <NavbarMain id={user.id}/>
        <div className='dep-uni-sup-container'>
            <div className='uni-super-assign'>
                <span className=' font-super bold'>Applications</span>
            </div>
            {applications.map((application) => (
            application.company_status == 'PENDING' ?
            <ApplicationStdCard key={application.id} application={application} fetchApplications={fetchApplications}/>:<></>
          
          ))}
        </div>
    </>
  )
}

export default StdApplication