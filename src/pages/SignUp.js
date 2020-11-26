import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi, this is submit sign up console.log");
    event.preventDefault();

    dispatch(signUp(name, email, password, picture));

    setName("");
    setEmail("");
    setPassword("");
    setPicture("");
  }

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
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            value={picture}
            onChange={(event) => setPicture(event.target.value)}
            type="text"
            placeholder="Enter a picture. Doesn't have to be a face"
            required
          />
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
