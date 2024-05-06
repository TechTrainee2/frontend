import React, { useState } from 'react'
import img from '../../static/company.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function CardPostDetail(props) {
  let { id } = useParams();

  



  // let [extradt10, setExtradt10] = useState({}); 


  const { user } = useSelector(
    state => state.user
	);

  
  let [data,setData]=useState({
    'student': '',
    'post': '',
    'company': '',
    'university_supervisor': '',
})

useEffect(() => {
  if (user && props.post && props.profile10) {
    setData({
      'student': `${user.id}`,
      'post': `${props.post.id}`,
      'company': `${props.post.company}`,
      'university_supervisor': `${props.profile10}`,
    });
  }
}, [user, props.post, props.profile10]);

  let [isModal,setIsModal]=useState(false) 
    let handelOnClick =()=> {
        setIsModal(true)
    }
    let handelOnClickX =()=> {
        setIsModal(false)
    }

    // Include dependencies in the dependency array


//creation of application for std to apply for a post

const onSubmit = async () => {
   
    
  try {
    const response = await fetch(`http://127.0.0.1:8000/users/company/student/trainingApplication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.error('Error:', error);
  }
};




  return (
    <>
        <div className='large-card gray-bk centered-card margin-bottom margin-bottom-apply'>
          <div className='std-post-detail' >


                <span className='std-company-profile bold'>
                  {props.post.title}
                </span>

              <div className='std-post-container'>
                <div className='std-company-profile'>
                  <Link to= {`/compProfile/${props.post.company}`}>
                    <img src={props.profile.img} className='company-img2' />
                  </Link>
                  <Link to={`/compProfile/${props.post.company}`}>
                    {/* <span>{props.extradt.name}</span> */}
                  </Link>
                  <span>{props.post.training_mode}</span>
                </div>

                <div className='std-post-txt'>
                  <p>
                    {props.post.post_details}
                  </p>
                </div>
              </div>

              <div className={isModal?'show': 'hidden'} >
                        <div className='modal-bk'></div>
                        <div className='apply-box' >
                            <div className='apply-box-comp'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>

                                <span className='bold navy-font'>Are you sure u want to Apply?</span>

                                <div className='apply-box-btns'>
                                    <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                                    <button className='button-size-std navy-bk white-font' type='submit' onClick={onSubmit}>Yes</button>
                                </div>
                            </div>

                        </div>
                    </div>
                  {user.account_type=="STUDENT" && (
                    <div className='std-apply-btn'>
                        <button className='button-size-std navy-bk white-font' onClick={handelOnClick}>
                            Apply
                          </button>
                    </div>
                )}

            </div>
            </div>
    </>
  )
}

export default CardPostDetail