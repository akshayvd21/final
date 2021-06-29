import React from "react";
import "./css/userpage3.css";
import user_appointment from "../user_assets/user__images/user_appointment.jpg";
const UserPage3 = () => {
  return (
    <div>
      <div className="user__appointment">
        <h1>Book an appointment</h1>
        <h6>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum
          dignissimos, assumenda a omnis soluta adipisci tempore? Blanditiis
          itaque id velit voluptate, corporis minus, nostrum inventore soluta
          molestias harum autem.
        </h6>
        <button>Make an appointment</button>
        <div className="imgbg"></div>
        <img className="userappointment__image" src={user_appointment} alt="" />
      </div>
    </div>
  );
};

export default UserPage3;
