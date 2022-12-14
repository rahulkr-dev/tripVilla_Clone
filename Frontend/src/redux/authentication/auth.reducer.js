import Cookies from "js-cookie";
import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_OUT,
  RESET_PASSWORD,
  RESET_PASSWORD_REMOVE,
  REFRESH,
  REFRESH_REMOVE,
} from "./auth.types";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    userid: "",
    isAuthenticated: false,
  },
  error: false,
  resetemail: "",
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_LOG_IN_SUCCESS: {
      console.log("logged in successfully");
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          token: Cookies.get("jwttoken"),
          userid: Cookies.get("userid"),
          isAuthenticated: true,
        },
      };
    }
    case AUTH_LOG_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_LOG_OUT: {
      console.log("logging out");
      return {
        ...state,
        data: {
          ...state.data,
          token: "",
          userid: "",
          isAuthenticated: false,
        },
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetemail: payload,
      };
    }
    case RESET_PASSWORD_REMOVE: {
      return {
        ...state,
        resetemail: "",
      };
    }
    case REFRESH: {
      console.log("REFRESHTOKEN is Good");
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          token: Cookies.get("jwttoken"),
          userid: Cookies.get("userid"),
          isAuthenticated: true,
        },
      };
    }
    case REFRESH_REMOVE: {
      console.log("REFRESHTOKEN IS EXPIRED");
      return {
        ...state,
        data: {
          ...state.data,
          token: "",
          userid: "",
          isAuthenticated: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
