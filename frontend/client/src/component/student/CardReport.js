import React, { useState } from 'react'
import prof from '../../static/prof.png'
import img from '../../static/CompSuper.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CardReport(props) {
    let [uniProfile, uniSetProfile] = useState({});
    let [uniExtradt, uniSetExtradt] = useState({});
    let [compProfile, compSetProfile] = useState({});
    let [compExtradt, compSetExtradt] = useState({});
    let {user } = useSelector((state) => state.user);

    let { id } = useParams();

    let [TotalHour,setTotalHours] = useState(0);

    let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`http://127.0.0.1:8000/users/uniprof/${props.report.university_supervisor}`, {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            });
            const res2 = await fetch(`http://127.0.0.1:8000/users/companysuperprof/${props.report.company_supervisor}`, {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            });
    
            if (!res.ok) {
              throw new Error("Failed to fetch data");
            }
            if (!res2.ok) {
              throw new Error("Failed to fetch data");
            }
    
            
            const uniProfile = await res.json();
            const compProfile = await res2.json();
    
    
            // dispatch(getUser());
            
            // Set profile state after data is fetched
    
            uniSetProfile(uniProfile)
            uniSetExtradt(uniProfile.university_supervisor)
            compSetProfile(compProfile)
            compSetExtradt(compProfile.company_supervisor)
    
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        // Call fetchData function when component mounts
        fetchData();
      }, [id,user.id,user]);


    useEffect(() => {
        const fetchData = async () => {
            let totalHours = 0;
            if (props.report && props.report.table_data) {
                await Promise.all(props.report.table_data.map(async item => {
                    totalHours += parseInt(item.hours);
                }));
            }
            setTotalHours(totalHours);
        }
       
        // Call fetchData function when component mounts
        fetchData();
    }, [props.report,id]);
  return (
    <>
        <div className='large-card-report gray-bk centered-card large-margin-bottom-phone'>
            <div className='report-container'>
                <div className='compsuper-header-report'>
                    <span className='bold'>Week {props.report.week_number}</span>

                    <div className='compsuper-date'>
                        <span>Date from </span>
                        <span>{props.report.date_begin } </span>
                        <span>To </span>
                        <span>{props.report.date_end }</span>
                    </div>
                </div>
            

            <div className='compsuper-fill-report-topic '>

                <div className='fill-report-topic'>
                    <span className='bold'>Topic </span>
                    {   props.report.table_data!=null ?(
                        props.report.table_data.map((item) => (
                            <div className='fill-report-topic'>
                                <span>{item.topic}</span>
                            </div>

                    ) 
                    )):<></>
                    }
                </div>

                <div className='fill-report-equipment'>
                    <span className='bold'>Software and Equipment used</span>
                    {   props.report.table_data!=null ?(
                        props.report.table_data.map((item) => (
                            <div className='fill-report-topic'>
                                <span>{item.details}</span>
                            </div>
                    ) 
                    )):<></>
                    }
                </div>

                <div className='fill-report-hours'>
                    <span className='bold'>Hours</span> 
                    {   props.report.table_data!=null ?(
                        props.report.table_data.map((item) => (
                            <div className='fill-report-topic'>
                                <span>{item.hours}</span>
                            </div>
                    ) 
                    )):<></>
                    }
                </div>
            
            </div>
        

        <div className='report-TotalHour bold'>
            <span>Total hours</span>
            <span>{TotalHour}</span>
        </div>

        <div className='std-report-status-btn'>
            <button className='button-size navy-bk white-font font-med' onClick={handelOnClick}>Status</button>
        </div>


        </div>
        <div className={isModal?'show': 'hidden'} >
                        <div className='status-modal-bk'></div>
                        <div className='std-report-status-box'>
                            <div className='std-status-box-comp'>

                                    
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                                        <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                    
                                    <span className='bold navy-font '>Status</span>


                                <div className='card3-status gray-bk centered-card'>
                                    <div className='std-report-status-comp'>
                                        <div className='std-status-super-images'>
                                            <Link to= {`/superAcc/${props.report.university_supervisor}`}>
                                                <img src={uniProfile.img} className='std-status-circle '/>
                                            </Link>
                                            <Link to={`/superAcc/${props.report.university_supervisor}`}>
                                                <span>{uniExtradt.first_name} {uniExtradt.last_name}</span>
                                            </Link>
                                        </div>
                                        {props.report.universitySupervisorSignature == null ? 
                                        <button className='std-progress-btn-size light-navy-bk white-font bold'>In Progress</button> : 
                                        <button className='std-progress-btn-size navy-bk white-font bold'>Approved</button>
                                        }
                                    </div>
                                </div>

                                <div className='card3-status gray-bk centered-card'>
                                    <div className='std-report-status-comp'>
                                        <div className='std-status-super-images'>
                                            <Link to={`/CompSuperAcc/${props.report.company_supervisor}`}>
                                                <img src={compProfile.img} className='std-status-circle'/>
                                            </Link>
                                            <Link to={`/CompSuperAcc/${props.report.company_supervisor}`}>
                                                <span>{compExtradt.first_name} {compExtradt.last_name}</span>
                                            </Link>
                                        </div>
                                        {props.report.companySupervisorSignature == null ? 
                                        <button className='std-progress-btn-size light-navy-bk white-font bold'>In Progress</button> : 
                                        <button className='std-progress-btn-size navy-bk white-font bold'>Approved</button>
                                        }
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
        </div>
    </>
  )
}

export default CardReport