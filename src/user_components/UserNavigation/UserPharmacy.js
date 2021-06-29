import React from "react";
import "./css/UserPharmacy.css";
import delivery from "../user_assets/user__images/delivery.jpg";
const UserPharmacy = () => {
  return (
    <>
      <div class="split left">
        <div class="otpcentered">
          <img src={delivery} alt="" />
        </div>
      </div>
      <div class="split right">
        <div className="pharmacy__1">
          <h2>your prescription Details</h2>
          <p>Paracetamol</p>
          <p>Quantity 15 tablets</p>
          <span>&#8377;520</span>
          <button>upload</button>
        </div>
      </div>
    </>
  );
};

export default UserPharmacy;
