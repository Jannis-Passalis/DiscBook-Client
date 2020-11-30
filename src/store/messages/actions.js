export const clearMessage = () => ({ type: "CLEAR_MESSAGE" });

export const setMessage = (variant, dismissable, text) => {
  return {
    type: "SET_MESSAGE",
    payload: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (
  variant,
  dismissable,
  text,
  timeOutMilliSeconds
) => {
  return (dispatch) => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || 3000;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
