import React from "react";
import img from "../../static/Stdbk.jpg";
import img2 from "../../static/Student.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user'
import { useCookies } from 'react-cookie';

function CardProfile(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['access']);
  const dispatch = useDispatch();
  return (
    <>
      <div className="large-card gray-bk centered-card">
        <div className="std-acc-comp ">
          <div className="std-images">
            <img src={props.profile.img_bk} className="imgbk-size" />
            <img src={props.profile.img} className="std-circle std-profile" />
          </div>

          {props.isSameUser && (
              <div className="std-btns-acc">
                  <Link to="/stdEdit">
                    <button className="button-size-std navy-bk white-font">
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

          <div className="std-txt-left">
            <div className="std-btn-name">
              <div className="txt-std-name">
                <span>
                  {props.extra.first_name} {props.extra.last_name}
                </span>
                
                {/* <span>University supervisor: Dr. {props.uni.first_name}</span>  */}
                {/* @TO DO complete the data */}
              </div>
            </div>
            
             <div>
              <span className="bold">Supervisor: </span>
              <Link to={`/superAcc/${props.stdDetails.university_supervisor ? props.stdDetails.university_supervisor.user : ''}`}>
                <span>
                  {props.stdDetails.university_supervisor ? `${props.stdDetails.university_supervisor.first_name} ${props.stdDetails.university_supervisor.last_name}` : ''}
                </span>
              </Link>
            </div> 
            <span>{props.profile.bio}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
