import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_OTP_FAILURE,
  USER_OTP_SUCCESS,
  USER_OTP_VALID,
  USER_OTP_INVALID,
  USER_FORGOT_PASS,
  USER_FORGOT_PASS_INVALID,
  USER_RESET_PASS,
  USER_RESET_PASS_INVALID,
} from "../constants/userconstants";
import axios from "axios";
export const userLogin = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/userLogin`,
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegister =
  (name, phone, email, password, age, gender, address) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/registerUser`,
        { name, phone, email, password, age, gender, address },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const userotp = (phone) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`/api/sendUserOTP`, { phone }, config);
    dispatch({
      type: USER_OTP_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userotp", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_OTP_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userotpValidation = (phone, code) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/submitUserOTP`,
      { phone, code },
      config
    );
    dispatch({ type: USER_OTP_VALID, payload: data });
  } catch (error) {
    dispatch({
      type: USER_OTP_INVALID,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
