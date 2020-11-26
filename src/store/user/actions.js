import { DbUrl } from "../../config/constants";
import axios from "axios";

export const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

export const userByToken = (userInfo) => {
  return {
    type: "USER_BY_TOKEN",
    payload: userInfo,
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${DbUrl}/login`, {
        email,
        password,
      });
      console.log("this is the login response", response);
      const userWithoutToken = response.data;
      dispatch(loginSuccess(userWithoutToken));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const logOut = () => ({ type: "LOG_OUT" });

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");

    if (token === null) return;

    try {
      const response = await axios.get(`${DbUrl}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userInfo = response.data;

      dispatch(userByToken(userInfo));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};

export const signUp = (name, email, password, picture) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${DbUrl}/signup`, {
        name,
        email,
        password,
        picture,
      });
      console.log("what is response", response);
      dispatch(loginSuccess(response.data));
    } catch (e) {
      console.log("error", e);
    }
  };
};
