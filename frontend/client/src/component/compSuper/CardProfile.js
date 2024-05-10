import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user'

function CardProfile(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['access']);
    const dispatch = useDispatch();
    
  return (
    <>
     <div className='card2 gray-bk centered-card'>
        

        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={props.profile.img_bk} className='imgbk-size'/>
                <img src={props.profile.img} className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>

                        <div className='txt-compsuper-name'>
                            <span>{props.extra.first_name} {props.extra.last_name} </span>
                        </div>
                        {props.isSameUser && (
                        <div className='compsuper-btn-mod'>
                            <Link to='/CompSuperEditAcc' >
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
                    )}

                    </div>

                        <p>Works  as {props.extra.role}</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardProfile