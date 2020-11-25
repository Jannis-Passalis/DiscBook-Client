import React, { useState } from "react";
import { Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/user/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    console.log("hi, this is submit login console.log");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicEmail">
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
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="outline-dark" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        <Link to="#signup" style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
      </Form>
    </Container>
  );
}
