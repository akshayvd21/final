import React from "react";
import "./App.css";
import Next from "./user_components/UserNavigation/Next";
// import UserPersonalDetails from "./user_components/UserNavigation/UserPersonalDetails";
import Userotp from "./user_components/UserNavigation/Userotp";
import UserPage1 from "./user_components/UserNavigation/UserPage1";
import UserPage2 from "./user_components/UserNavigation/UserPage2";
import UserPage3 from "./user_components/UserNavigation/UserPage3";
import UserNavigation from "./user_components/UserNavigation/UserNavigation";
import UserSignup from "./user_components/UserNavigation/UserSignup";
// import UserRemainder from "./user_components/UserNavigation/UserRemainder";
// import UserPayment from "./user_components/UserNavigation/UserPayment";
// import Userupload from "./user_components/UserNavigation//Userupload";
// import UserAllergySection from "./user_components/UserNavigation/UserAllergySection";
import UserLogin from "./user_components/UserNavigation/UserLogin";
// vinay411@gmail.com anupaman99
// import UserBill from "./user_components/UserNavigation/UserBill";
// import UserPharmacy from "./user_components/UserNavigation/UserPharmacy";
import Test from "./user_components/UserNavigation/Test";
// import UserLocation from "./user_components/UserNavigation/UserLocation";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import UserDoctorNavigation from "./user_components/UserNavigation/UserDoctorNavigation";
import UserPersonalDetails from "./user_components/UserNavigation/UserPersonalDetails";
function App() {
  return (
    <div>
      {/* <UserSignup /> */}
      {/* <UserLogin /> */}
      {/* <UserPersonalDetails /> */}
      {/* <UserPage1 />
      <UserPage2 />
      <UserPage3 /> */}
      <UserNavigation />
      {/* <UserDoctorNavigation /> */}
    </div>
  );
}

export default App;
