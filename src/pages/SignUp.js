import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { showMessageWithTimeout } from "../store/messages/actions";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      history.push("/");
      dispatch(
        showMessageWithTimeout(
          "info",
          true,
          "You are already logged in with an account. Please log out if you want to login or sign up with another user.",
          7000
        )
      );
    }
  }, [token, history, dispatch]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, picture));

    setName("");
    setEmail("");
    setPassword("");
    setPicture("");
  }

  const myCropWidget = async () => {
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dvdmlxiws",
        uploadPreset: "oy6o6i4o",
        cropping: true,
      },

      (error, result) => {
        console.log(error, result);

        if (result.event === "success") {
          setPicture(result.info.url);
        }
      }
    );
    uploadWidget.open();
  };

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Sign Up</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile Picture: </Form.Label>
          <Button variant="outline-info" onClick={myCropWidget}>
            Upload profile picture
          </Button>
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="outline-dark" type="submit" onClick={submitForm}>
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
