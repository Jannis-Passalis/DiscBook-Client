import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/actions";

export default function NavigationBar() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const loginLogoutButton = token ? (
    <Nav.Link href="/login">
      <Form inline>
        <Button
          className="mr-sm-2"
          variant="outline-info"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Form>
    </Nav.Link>
  ) : (
    <Nav.Link href="/login">
      <Form inline>
        <Button className="mr-sm-2" variant="outline-info">
          Login
        </Button>
      </Form>
    </Nav.Link>
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DiscBook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          {loginLogoutButton}
        </Nav>
      </Navbar>
    </div>
  );
}
