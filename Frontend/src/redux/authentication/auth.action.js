import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_OUT,
  RESET_PASSWORD,
  RESET_PASSWORD_REMOVE,
  REFRESH,
  REFRESH_REMOVE,
} from "./auth.types";
import axios from "axios";
import Cookies from "js-cookie";
import { setToast } from "../../Utils/extraFunctions";

export const loginAPI = (data, toast, navigate) => async (dispatch) => {
  try {
    let response = await axios.post("https://cozytrip.up.railway.app/user/login", data);
    console.log(response);
    if (response.status === 201) {
      Cookies.set("jwttoken", response.data.jwttoken, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      Cookies.set("refreshtoken", response.data.refreshtoken, {
        expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      });
      Cookies.set("userid", response.data.userid, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      dispatch({
        type: AUTH_LOG_IN_SUCCESS,
        payload: response.data,
      });
      setToast(toast, response.data.message, "success");
      navigate("/");
    } else {
      setToast(toast, response.data.message, "error");
    }
  } catch (error) {
    dispatch({
      type: AUTH_LOG_IN_ERROR,
    });
    setToast(toast, error.response.data.message, "error");
  }
};

export const logoutAPI = () => ({ type: AUTH_LOG_OUT });

export const resetpassword = (data, toast, navigate) => async (dispatch) => {
  try {
    let res = await axios.post("https://cozytrip.up.railway.app/user/checkmail", {
      data,
    });
    dispatch({
      type: RESET_PASSWORD,
      payload: res.data.email,
    });
    Cookies.set("otp", res.data.otp, {
      expires: new Date(new Date().getTime() + 5 * 60 * 1000),
    });
    setToast(toast, "Reset OTP Sent To Your Email", "success");
    navigate("/resetpassword");
  } catch (error) {
    setToast(toast, error.response.data.message, "error");
  }
};

export const resetpasswordremove = () => ({
  type: RESET_PASSWORD_REMOVE,
});

export const refreshCheck = (navigate) => async (dispatch) => {
  try {
    let refreshtoken = Cookies.get("refreshtoken");
    let response = await axios.post("https://cozytrip.up.railway.app/user/refresh", {
      headers: {
        Authorization: "Bearer " + refreshtoken,
      },
    });
    console.log(response.data);
    Cookies.set("jwttoken", response.data.jwttoken, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    Cookies.set("userid", response.data.userid, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    dispatch({
      type: REFRESH,
      payload: response.data,
    });
    navigate("/");
  } catch (error) {
    dispatch({
      type: REFRESH_REMOVE,
    });
  }
};
