import React from "react";
import "./css/userpage2.css";
import userWelcome from "../user_assets/user__images/userWelcome.jpg";
const userpage2 = () => {
  return (
    <div>
      <div className="userhome__image">
        <img src={userWelcome} alt="" />
        <h1>
          hi, <span className="userhome__span">Welcome</span>
          <br />
          <b>Akshay</b>
        </h1>
      </div>
    </div>
  );
};

export default userpage2;
