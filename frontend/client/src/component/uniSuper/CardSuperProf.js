import React from 'react'
import img from '../../static/profbk.png'
import img2 from '../../static/prof.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user'
import { useCookies } from 'react-cookie';

function CardSuperProf(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['access']);
    const dispatch = useDispatch();
  return (
    <>
     <div className='card2 gray-bk centered-card'>
        
        <div className='std-acc-comp '>
            <div className='std-images'>
                <img src={props.profile.img_bk} className='imgbk-size'/>
                <img src={props.profile.img}  className='std-circle std-profile'/>
            </div>
                <div className='std-txt-left'>
                    <div className='std-btn-name'>
                        <div className='txt-std-name'>
                            <span>{props.extra.first_name} {props.extra.last_name} </span>
                        
                        </div>

                        {props.isSameUser && (
                        <div className='std-unisuper-btns-m'>
                            <Link to='/SuperEdit' >
                                <button className='button-size-std navy-bk white-font'>
                                    Edit
                                </button>
                            </Link >
                            <button className='button-size-std navy-bk white-font' onClick={() => dispatch(logout(cookies.access)).then(() => {
                                removeCookie('access');
                                window.location='/'
                            }) }>
                                Log Out 
                            </button>
                        </div>
                         )}

                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardSuperProf