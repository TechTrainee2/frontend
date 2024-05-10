import React from 'react'
import img from '../../static/Compbk.png'
import img2 from '../../static/company.png'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user'
import { useCookies } from 'react-cookie';


function CardProfile(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['access']);

    const dispatch = useDispatch();
  return (
    <>
     <div className='large-card gray-bk centered-card'>
        
        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={props.profile.img_bk} className='imgbk-size'/>
                <img src={props.profile.img} className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>

                        <div className='comp-profile-txt'>

                            <div className='txt-comp-name font-med'>
                                <span className='bold'>{props.extra.name}</span>
                                    <span className='bold'> {props.user.email}</span>
                                <div style={{display: 'flex'}}>
                                    <span className='bold'>Located at : &nbsp;</span> 
                                    <span> {props.profile.location}</span>
                                </div>
                               
                            </div>


                        </div>

                        {props.isSameUser && (
                        <div className='comp-btn-container'>
                            <div className='std-btns'>
                                <Link to= {`/compEditProfile/${props.id}`} >
                                    <button className='button-size-std navy-bk white-font'>
                                        Edit
                                    </button>
                                </Link>
                                
                                <button className='button-size-std navy-bk white-font' onClick={() => dispatch(logout(cookies.access)).then(() => {
                                     removeCookie('access');
                                    window.location='/'
                                    }) }>
                                    Log Out 
                                </button>
                            </div>

                            <div>
                                <Link to='/compNewPost' >
                                    <button className='button-size-std navy-bk white-font'>
                                        Add Post
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                    </div>

                    
                </div>
        </div>
    </div>
    </>
  )
}

export default CardProfile