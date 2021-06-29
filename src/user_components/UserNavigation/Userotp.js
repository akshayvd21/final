import React from "react";
import PinInput from "react-pin-input";
import { Typography } from "@material-ui/core";
// import DoctorNavbar from "../../components/DoctorNavbar";
import "./css/userotp.css";
// import { Link } from "react-router-dom";
import signup from "../user_assets/user__images/signup.png";
const Userotp = () => {
  return (
    <>
      {/* <DoctorNavbar /> */}
      <div className="registerContainer">
        <div className="leftSide">
          <img src={signup} alt="" />
        </div>
        <div className="rightSide">
          <div className="text">
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginBottom: "1.5rem" }}
            >
              Sign Up
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Hi,<span style={{ color: "#00ACB1" }}>Welcome!</span>{" "}
            </Typography>
            <Typography variant="subtitle2">Enter your OTP!</Typography>
          </div>
          <div>
            <PinInput
              length={4}
              type="numeric"
              style={{ marginTop: "5px" }}
              inputStyle={{
                borderColor: "white",
                backgroundColor: "white",
                height: "2rem",
                margin: "0",
                borderRadius: "5px",
              }}
              inputFocusStyle={{
                borderColor: "#00ACB1",
                backgroundColor: "white",
              }}
            />
          </div>
          {/* <Link to="/password"> */}
          <button>submit</button> {/* </Link> */}
          <div className="icons">
            <button>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button>
              <i className="fab fa-google"></i>
            </button>
            <button>
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userotp;
