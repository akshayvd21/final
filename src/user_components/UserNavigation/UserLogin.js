// import React from "react";
// import "./css/userLogin.css";
// import signup from "../user_assets/user__images/signup.png";
// import { userLogin } from "../../action/action";
// import { useDispatch } from "react-redux";
// const UserLogin = () => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(userLogin(email, password));
//   };
//   return (
//     <>
//       <div class="split left">
//         <div class="otpcentered">
//           <img src={signup} alt="" />
//         </div>
//       </div>
//       <div class="split right">
//         <div class="otpcentered">
//           <h1>
//             Hi,
//             <span className="span" style={{ color: "#00acb1" }}>
//               Welcome,
//             </span>
//           </h1>
//           <label style={{ color: "black" }}>user Name</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             style={{ outline: "none", border: "none", marginLeft: "10px" }}
//           />
//           <br />
//           <label style={{ color: "black" }}>Password</label>
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             style={{
//               outline: "none",
//               border: "none",
//               marginLeft: "20px",
//               marginTop: "15px",
//             }}
//           />
//           <br />
//           <button type="submit" className="otp__button" onClick={submitHandler}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserLogin;
import React from "react";
import "./css/userLogin.css";
import signup from "../user_assets/user__images/signup.png";
import { Typography } from "@material-ui/core";

const UserLogin = () => {
  return (
    <>
      <div className="registerContainer">
        <div className="leftSide">
          <img src={signup} alt="" />
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
                variant="subtitle2"
                style={{ fontWeight: "bold", marginBottom: "1.5rem" }}
              >
                Log In
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Hi,<span style={{ color: "#00ACB1" }}>Good Day!</span>
              </Typography>
            </div>

            <div>
              <Typography
                variant="subtitle2"
                style={{
                  color: "#00ACB1",
                  marginBottom: "1rem",
                }}
              >
                User Name
              </Typography>
              <input
                type="text"
                style={{
                  marginBottom: "1rem",
                  outLine: "none",
                  outLine: "none",
                  border: "none",
                }}
              />
            </div>

            <div>
              <Typography variant="subtitle2" style={{ marginBottom: "1rem" }}>
                Confirm Password
              </Typography>
              <input
                type="password"
                style={{ outLine: "none", border: "none" }}
              />
            </div>
          </div>
          {/* <Link to="/landing"> */}
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

export default UserLogin;
