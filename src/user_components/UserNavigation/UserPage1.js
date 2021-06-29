import React from "react";
import "./css/userpage1.css";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import VideoCallIcon from "@material-ui/icons/VideoCall";
const UserPage1 = () => {
  return (
    <div>
      <div className="usernavigation__main">
        <a href="">Home</a>
        <a href="#about">Profile</a>
        <a href="#about">Consult</a>
        <a href="">Shop</a>
        <button className="usernavigation__button">Profile</button>
      </div>
      {/* <div className="usernavigation__header">
        <SettingsIcon />
        <NotificationsActiveIcon />
        <VideoCallIcon />
      </div> */}
    </div>
  );
};

export default UserPage1;
