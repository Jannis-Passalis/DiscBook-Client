import React from "react";
import { Button, Form, Nav } from "react-bootstrap";

export default function LoginButton() {
  return (
    <Nav.Link href="/login">
      <Form inline>
        <Button className="mr-sm-2" variant="outline-info">
          Login
        </Button>
      </Form>
    </Nav.Link>
  );
}
