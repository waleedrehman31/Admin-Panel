import React from "react";
import "./widgetsmall.css";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Mamber</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user_profile_image"
            className="widget-small-image"
          />
        </li>
      </ul>
    </div>
  );
}
