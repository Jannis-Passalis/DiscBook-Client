import React from "react";
import { Button, Nav } from "react-bootstrap";

export default function LoginButton() {
  return (
    <Nav.Link href="/login">
      <Button className="mr-sm-2" variant="outline-info">
        Login
      </Button>
    </Nav.Link>
  );
}
