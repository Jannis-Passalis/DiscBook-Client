import React from "react";
import { Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
          // type="email"
          // placeholder="Enter email"
          // required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          // type="password"
          // placeholder="Password"
          // required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button
            variant="dark"
            type="submit"
            //   onClick={submitForm}
          >
            Log in
          </Button>
        </Form.Group>
        <Link
        // to="/signup" style={{ textAlign: "center" }}
        >
          Click here to sign up
        </Link>
      </Form>
    </Container>
  );
}
