import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

export default function SignUp() {
  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Sign Up</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
            // type="email"
            placeholder="Enter name"
            // required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
            // type="password"
            placeholder="Enter email"
            // required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
            // type="password"
            placeholder="Enter password"
            // required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
            // type="password"
            placeholder="Enter a picture. Doesn't have to be a face"
            // required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="outline-dark" type="submit">
            Log in
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
