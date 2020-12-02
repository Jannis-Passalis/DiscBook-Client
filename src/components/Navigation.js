import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import LogOutButton from "./LogOutButton";
import LoginButton from "./LoginButton";

export default function NavigationBar() {
  const token = useSelector(selectToken);

  const loginLogoutButton = !token ? <LoginButton /> : <LogOutButton />;
  const myDiscbookBar = token ? (
    <Nav.Link href="/mydiscbook">MyDiscBook</Nav.Link>
  ) : null;

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DiscBook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/cds">CDs</Nav.Link>
          {myDiscbookBar}
          <Nav.Link href="/about">About Us</Nav.Link>
          <Form inline>{loginLogoutButton}</Form>
        </Nav>
      </Navbar>
    </div>
  );
}
