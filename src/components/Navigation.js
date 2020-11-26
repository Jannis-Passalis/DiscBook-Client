import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import LogOutButton from "./LogOutButton";
import LoginButton from "./LoginButton";

export default function NavigationBar() {
  const token = useSelector(selectToken);

  const loginLogoutButton = token ? <LogOutButton /> : <LoginButton />;

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DiscBook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/mydiscbook">MyDiscBook</Nav.Link>
          {loginLogoutButton}
        </Nav>
      </Navbar>
    </div>
  );
}
