import React from "react";
import img from "../../static/Stdbk.jpg";
import img2 from "../../static/Student.jpg";
import { Link } from "react-router-dom";

function CardProfile(props) {
  return (
    <>
      <span className="centered-title bold">My Account</span>
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
                  {props.profile.first_name} {props.profile.last_name}
                </span>
                {/* @TO DO complete the data */}
                <span></span>
                <span>Dr. Ahmad</span>
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

            <p>
              I’m a 4th year Computer Science student at the University of
              Jordan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
