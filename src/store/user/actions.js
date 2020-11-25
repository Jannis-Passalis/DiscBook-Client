import { DbUrl } from "../../config/constants";
import axios from "axios";

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      console.log("this is email", email);
      console.log("this is password", password);
      const response = await axios.post(`${DbUrl}/login`, {
        email,
        password,
      });
      console.log("this is the login response", response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
