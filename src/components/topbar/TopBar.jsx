import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">ADMIN</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon">
            <Language />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile_image"
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
}
