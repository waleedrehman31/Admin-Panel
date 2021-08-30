import React from "react";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";

import "./user.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="user_profile_image"
              className="user-show-top-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-top-username">Anna Becker</span>
              <span className="user-show-top-jobtitle">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-bottom-title">Account Details</span>
            {/* User userName */}
            <div className="user-show-info-container">
              <PermIdentity className="user-show-bottom-icon" />
              <span className="user-show-bottom-infotitle">annabareck99</span>
            </div>
            {/* User Birthday */}
            <div className="user-show-info-container">
              <CalendarToday className="user-show-bottom-icon" />
              <span className="user-show-bottom-infotitle">20.12.1999</span>
            </div>
            {/* User Phone number */}
            <span className="user-show-bottom-title">Contact Details</span>
            <div className="user-show-info-container">
              <PhoneAndroid className="user-show-bottom-icon" />
              <span className="user-show-bottom-infotitle">+1 321 555 555</span>
            </div>
            {/* User Email */}
            <div className="user-show-info-container">
              <MailOutline className="user-show-bottom-icon" />
              <span className="user-show-bottom-infotitle">
                annabareck99@email.com
              </span>
            </div>
            {/* User Address */}
            <div className="user-show-info-container">
              <LocationSearching className="user-show-bottom-icon" />
              <span className="user-show-bottom-infotitle">KPK | Pakistan</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-uptade-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-form-left">
              {/* Input For Username */}
              <div className="user-update-form-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="user-update-form-input"
                />
              </div>
              {/* Input For Full Name */}
              <div className="user-update-form-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="user-update-form-input"
                />
              </div>
              {/* Input For Email */}
              <div className="user-update-form-item">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="annabeck99@email.com"
                  className="user-update-form-input"
                />
              </div>
              {/* Input For PhoneNumber */}
              <div className="user-update-form-item">
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="+1 321 555 555"
                  className="user-update-form-input"
                />
              </div>
              {/* Input For Username */}
              <div className="user-update-form-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="KPK | Pakistan"
                  className="user-update-form-input"
                />
              </div>
            </div>
            <div className="user-update-form-right">
              <div className="user-update-upload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="user_profile_image"
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-right-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
