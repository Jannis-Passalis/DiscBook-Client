import { DbUrl } from "../../config/constants";
import axios from "axios";

export const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
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
