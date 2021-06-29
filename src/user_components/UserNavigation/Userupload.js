import React from "react";
import "./css/Userupload.css";
import upload from "../user_assets/user__images/upload.jpg";
const Userupload = () => {
  return (
    <>
      <div class="split left">
        <div class="otpcentered">
          <img src={upload} alt="" />
        </div>
      </div>
      <div class="split right">
        <div class="otpcentered">
          <input
            type="file"
            id="myFile"
            name="filename"
            style={{ border: "none", outline: "none", padding: "10px" }}
          />
          {/* <progress id="file" value="0" max="100" /> */}
          <button type="submit" className="otp__button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Userupload;
