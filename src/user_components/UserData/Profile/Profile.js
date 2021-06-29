import React from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import TimerIcon from "@material-ui/icons/Timer";
import NoteIcon from "@material-ui/icons/Note";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
const Profile = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="drop" style={{ marginTop: "100px" }}>
            {/* eslint-disable-next-line  */}

            <div className="dropdownContain">
              <div className="dropOut">
                <div className="triangle"></div>
                <ul>
                  <li>Home</li>
                  <li>My Bookings</li>
                  <li>My Family</li>
                  <li>My Prescriptions</li>
                  <li>Known Allergies</li>
                  <li>My reminders</li>
                  <li>Existing Conditions</li>
                  <li>My Vitals</li>
                  <li>Gallery</li>
                  <li>logOut</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
