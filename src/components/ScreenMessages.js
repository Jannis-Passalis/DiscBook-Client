import React from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../store/messages/actions";
import { selectMessage } from "../store/messages/selectors";

export default function ScreenMessages() {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert
      show={showMessage}
      variant={message.variant}
      dismissible={message.dismissable}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      {message.text}
    </Alert>
  );
}
