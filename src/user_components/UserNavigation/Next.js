import React from "react";
import { useDispatch } from "react-redux";
import { userotpValidation } from "../../action/action";
const Next = ({ phone }) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    dispatch(userotpValidation(phone, otp));
    console.log(phone);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="tel"
          placeholder="otp"
          vlaue={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">uub</button>
      </form>
    </div>
  );
};

export default Next;
