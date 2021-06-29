import React from "react";
import "./css/UserBill.css";
const UserBill = () => {
  return (
    <>
      <div class="split left">
        <button>Have an offer code ?</button>
        <button>Apply</button>
        <div id="abc">
          <p style={{ marginTop: "-20px" }}>Amount Payable</p>
          <h5 style={{ marginTop: "30px" }}>
            Consultation fees
            <span style={{ marginLeft: "50px" }}>&#8377;</span>
            <span>500</span>
          </h5>
          <h5 style={{ marginTop: "-20px" }}>
            Convience fees <span style={{ marginLeft: "63px" }}>&#8377;</span>
            <span>0</span>
          </h5>
          <h6 style={{ marginTop: "-30px" }}>
            ------------------------------------------------
          </h6>
          <h5 style={{ marginTop: "-20px" }}>
            Total <span style={{ marginLeft: "125px" }}>&#8377;</span>
            <span>500</span>
          </h5>
          <h6 style={{ marginTop: "30px" }}>
            Instructions: Please see appointment instructions after booking.{" "}
          </h6>
          <button
            style={{
              marginTop: "10px",
              border: "none",
              outline: "none",
              padding: "10px",
              backgroundColor: "#9ad8d8",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Pay&#8377;{250 + 250}{" "}
          </button>
        </div>
      </div>

      <div class="split right">
        <button>Don't have an offer code ?</button>

        <div id="abc">
          <p style={{ marginTop: "-20px" }}>Amount Payable</p>
          <h5 style={{ marginTop: "30px" }}>
            Consultation fees
            <span style={{ marginLeft: "50px" }}>&#8377;</span>
            <span>500</span>
          </h5>
          <h5 style={{ marginTop: "-20px" }}>
            Convience fees <span style={{ marginLeft: "63px" }}>&#8377;</span>
            <span>0</span>
          </h5>
          <h6 style={{ marginTop: "-30px" }}>
            ------------------------------------------------
          </h6>
          <h5 style={{ marginTop: "-20px" }}>
            Total <span style={{ marginLeft: "125px" }}>&#8377;</span>
            <span>{100 + 200}</span>
          </h5>
          <h4 style={{ marginTop: "40px" }}>
            <i class="fa fa-check" aria-hidden="true"></i>
            Agreed for terms and conditions
          </h4>
          <button
            style={{
              marginTop: "10px",
              border: "none",
              outline: "none",
              padding: "10px",
              backgroundColor: "#9ad8d8",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Pay&#8377;{250 + 250}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserBill;
