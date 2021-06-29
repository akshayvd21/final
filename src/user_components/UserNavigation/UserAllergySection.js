import React from "react";
import allergy from "../user_assets/user__images/allergy.jpg";
import "./css/userAllergySection.css";
const Userupload = () => {
  return (
    <>
      <div className="split__allergy left__allergy">
        <div className="centered__allergy">
          <img src={allergy} />
        </div>
      </div>

      <div className="split__allergy right__allergy">
        <h1>Known Allergies</h1>
        <h2>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>Add Allergies
        </h2>
        <button className="a">Drugs</button>
        <button className="b" disabled>
          Food
        </button>
        <button className="c" disabled>
          Others
        </button>
        <br />
        <br />

        <input className="input1" type="search" placeholder="paracetamol" />
        <div className="allergy__section1">
          <p style={{ marginTop: "0px", marginLeft: "20px" }}>
            No known Allergies
          </p>
          <input type="checkbox" style={{ width: "100px", height: "20px" }} />
          <button
            style={{
              border: "none",
              outline: "none",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Userupload;
