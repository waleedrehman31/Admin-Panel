import React from "react";
import "./newuser.css";

const NewUser = () => {
  return (
    <div className="new-user-page">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-form-item">
          <label>Username</label>
          <input
            type="text"
            placeholder="Jhon"
            className="new-user-form-input"
          />
        </div>
        <div className="new-user-form-item">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Jhon Smith"
            className="new-user-form-input"
          />
        </div>
        <div className="new-user-form-item">
          <label>Email</label>
          <input
            type="email"
            placeholder="jhon@email.com"
            className="new-user-form-input"
          />
        </div>
        <div className="new-user-form-item">
          <label>Passowrd</label>
          <input
            type="password"
            placeholder="password"
            className="new-user-form-input"
          />
        </div>
        <div className="new-user-form-item">
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="+1 523 255 25"
            className="new-user-form-input"
          />
        </div>
        <div className="new-user-form-item">
          <label>Address</label>
          <input
            type="text"
            placeholder="KPK | Pakistan"
            className="new-user-form-input"
          />
        </div>
        <div className="new-user-form-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="new-user-form-input"
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className="new-user-form-input"
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              className="new-user-form-input"
            />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="new-user-form-item">
          <label>Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
