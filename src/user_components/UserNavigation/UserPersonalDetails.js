import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";
import personal from "../user_assets/user__images/personal.jpg";
import "../../user_components/UserNavigation/css/UserPersonal.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const UserSignup = () => {
  const classes = useStyles();

  return (
    <>
      <div className="register__Container">
        <div className="left__Side">
          <img src={personal} alt="" />
        </div>
        <div className="right__Side">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "fit-content",
            }}
          >
            <div className="text" style={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                Personal Details
              </Typography>
              <form className={classes.root} Validate autoComplete="off">
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Gender" />
                <TextField id="standard-basic" type="date" />
                <TextField
                  id="standard-basic"
                  label="Emergency Contact Number"
                />
                <TextField id="standard-basic" label="Email" type="email" />
                <TextField id="standard-basic" label="Contact Number" />
                <TextField id="standard-basic" label="Present Address" />
                <TextField id="standard-basic" label="Permanent Address" />
              </form>
            </div>
          </div>
          {/* 
          <Link to="/otp"> */}
          <button className="per__btn">submit</button>
          {/* </Link> */}
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

export default UserSignup;
