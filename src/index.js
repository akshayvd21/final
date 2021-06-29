import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// import React from "react";
// import "./css/UserSignuppage.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import signup from "../user_assets/user__images/signup.png";
// import { connect } from "react-redux";

// const UserSignup = () => {
//   return (
//     <>
//       <div class="split left">
//         <div class="centered">
//           <img src={signup} alt="Avatar woman" />
//         </div>
//       </div>

//       <div class="split right">
//         <div class="centered">
//           <h3>Sign up</h3>
//           <h2>
//             hi,<span>Welcome</span>
//           </h2>
//           <p>Let's get started with your mobile number</p>
//           <div className="input__main">
//             <input className="inp" placeholder="+91" disabled />
//             <input type="tel" className="inp2" />
//           </div>
//           <button type="submit">Submit</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserSignup;
