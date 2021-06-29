import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_OTP_SUCCESS,
  USER_OTP_FAILURE,
  USER_OTP_VALID,
  USER_OTP_INVALID,
  USER_FORGOT_PASS,
  USER_FORGOT_PASS_INVALID,
  USER_RESET_PASS,
  USER_RESET_PASS_INVALID,
} from "../constants/userconstants";
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return { userInfo: action.payload };
    case USER_REGISTER_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload };
    case USER_LOGIN_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
export const userOTP = (state = {}, action) => {
  switch (action.type) {
    case USER_OTP_SUCCESS:
      return { OTPInfo: action.payload };
    case USER_OTP_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
export const userOTPValidations = (state = {}, action) => {
  switch (action.type) {
    case USER_OTP_VALID:
      return { OTPVAlidation: action.payload };
    case USER_OTP_INVALID:
      return { error: action.payload };
    default:
      return state;
  }
};
export const userPassReset = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASS:
      return { resetPass: action.payload };
    case USER_RESET_PASS_INVALID:
      return { error: action.payload };
    default:
      return state;
  }
};
export const userPassForgot = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASS:
      return { forgotPass: action.payload };
    case USER_FORGOT_PASS_INVALID:
      return { error: action.payload };
    default:
      return state;
  }
};
