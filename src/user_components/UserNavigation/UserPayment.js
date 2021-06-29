import React from "react";
import "./css/UserPayment.css";
import payment from "../user_assets/user__images/payment.png";
import PaymentIcon from "@material-ui/icons/Payment";
const Userotp = () => {
  return (
    <>
      <div class="split left">
        <div class="otp__centered">
          <img src={payment} alt="" />
        </div>
      </div>

      <div class="split right">
        <div className="section__1">
          <h1>Choose a payment option</h1>
          <h4>Total Payable amount is 500</h4>
          <h6>Transaction ID:12346abcd1</h6>
        </div>
        <div className="div">
          <h3 style={{ color: "#00acb1" }}>Payment Option</h3>

          <PaymentIcon />
          <label style={{ marginRight: "10px" }}>Card (debit/Credit)</label>
        </div>
      </div>
    </>
  );
};

export default Userotp;
