// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { useDispatch } from "react-redux";
// import { userRegister } from "../../action/action";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(2),

//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "300px",
//     },
//     "& .MuiButtonBase-root": {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// const Form = () => {
//   const classes = useStyles();
//   const [name, setname] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [age, setAge] = useState("");
//   // const [address, setAddress] = useState("");
//   // const [gender, setGender] = useState("");
//   const dispatch = useDispatch();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(name, phone, email, password, age);
//     dispatch(userRegister(name, phone, email, password, age));
//     setname("");
//     setPhone("");
//     setEmail("");
//     setPassword("");
//     setAge("");
//   };

//   return (
//     <form className={classes.root} onSubmit={submitHandler}>
//       <TextField
//         label="First Name"
//         variant="filled"
//         required
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//       />
//       <TextField
//         label="phone"
//         variant="filled"
//         required
//         type="tel"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//       <TextField
//         label="Email"
//         variant="filled"
//         type="email"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         variant="filled"
//         type="password"
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <TextField
//         label="age"
//         variant="filled"
//         required
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <div>
//         <Button type="submit" variant="contained" color="primary">
//           Signup
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default Form;
import React from "react";
import { Typography } from "@material-ui/core";
import register from "../user_assets/user__images/regsiter.png";
import "./css/UserSignuppage.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const UserSignup = () => {
  return (
    <>
      <div className="registerContainer">
        <div className="leftSide">
          <img src={register} alt="" />
        </div>
        <div className="rightSide">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
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
              <Typography variant="subtitle2">
                Lets get you started! Enter your
              </Typography>
              <Typography variant="subtitle2" style={{ marginBottom: "1rem" }}>
                mobile number
              </Typography>
            </div>
            <div>
              <PhoneInput country={"in"} />
            </div>
          </div>
          {/* 
          <Link to="/otp"> */}
          <button>submit</button>
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
