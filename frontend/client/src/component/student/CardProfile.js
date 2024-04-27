import React from "react";
import img from "../../static/Stdbk.jpg";
import img2 from "../../static/Student.jpg";
import { Link } from "react-router-dom";

function CardProfile(props) {
  return (
    <>
      <div className="large-card gray-bk centered-card">
        <div className="std-acc-comp ">
          <div className="std-images">
            <img src={props.profile.img_bk} className="imgbk-size" />
            <img src={props.profile.img} className="std-circle std-profile" />
          </div>
          <div className="std-txt-left">
            <div className="std-btn-name">
              <div className="txt-std-name">
                <span>
                  {props.extra.first_name} {props.extra.last_name}
                </span>
                
                {/* <span>University supervisor: Dr. {props.uni.first_name}</span>  */}
                {/* @TO DO complete the data */}
              </div>

                {props.isSameUser && (
              <div className="std-btns-acc">
                  <Link to="/stdEdit">
                    <button className="button-size-std navy-bk white-font">
                      Edit
                    </button>
                  </Link>
                <button className="button-size-std navy-bk white-font">
                  Log Out
                </button>
              </div>
                )}
            </div>

            <p>{props.extra.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
