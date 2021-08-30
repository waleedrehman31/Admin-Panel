import React from "react";
import "./widgetsmall.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <h3 className="widget-small-title">New Join Mamber</h3>
      <ul className="widget-small-list">
        {/* Users Information */}
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user_profile_image"
            className="widget-small-image"
          />
          <div className="widger-small-user">
            <span className="widget-small-username">Katy</span>
            <span className="widget-small-jobtitle">Software Engineer</span>
          </div>
          <button className="widget-small-button">
            <Visibility className="widget-small-icon" /> Display
          </button>
        </li>
        {/* End Users Information */}
        {/* Users Information */}
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user_profile_image"
            className="widget-small-image"
          />
          <div className="widger-small-user">
            <span className="widget-small-username">Katy</span>
            <span className="widget-small-jobtitle">Software Engineer</span>
          </div>
          <button className="widget-small-button">
            <Visibility className="widget-small-icon" /> Display
          </button>
        </li>
        {/* End Users Information */}
        {/* Users Information */}
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user_profile_image"
            className="widget-small-image"
          />
          <div className="widger-small-user">
            <span className="widget-small-username">Katy</span>
            <span className="widget-small-jobtitle">Software Engineer</span>
          </div>
          <button className="widget-small-button">
            <Visibility className="widget-small-icon" /> Display
          </button>
        </li>
        {/* End Users Information */}
        {/* Users Information */}
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user_profile_image"
            className="widget-small-image"
          />
          <div className="widger-small-user">
            <span className="widget-small-username">Katy</span>
            <span className="widget-small-jobtitle">Software Engineer</span>
          </div>
          <button className="widget-small-button">
            <Visibility className="widget-small-icon" /> Display
          </button>
        </li>
        {/* End Users Information */}
        {/* Users Information */}
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user_profile_image"
            className="widget-small-image"
          />
          <div className="widger-small-user">
            <span className="widget-small-username">Katy</span>
            <span className="widget-small-jobtitle">Software Engineer</span>
          </div>
          <button className="widget-small-button">
            <Visibility className="widget-small-icon" /> Display
          </button>
        </li>
        {/* End Users Information */}
      </ul>
    </div>
  );
}
