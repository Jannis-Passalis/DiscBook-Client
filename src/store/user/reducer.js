const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default function userReducer(state = initialState, action) {
  console.log("comes in the general reducer of user");
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("comes in the login success reducer");
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case "LOG_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    // case TOKEN_STILL_VALID:
    //   return { ...state, ...action.payload };

    default:
      return state;
  }
}
