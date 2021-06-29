import React from "react";
import { useDispatch } from "react-redux";
import { userPassForgot } from "../../reducers/userReducer";
const Test = () => {
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email);
    dispatch(userPassForgot(phone, email));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
      <br />
    </div>
  );
};

export default Test;
