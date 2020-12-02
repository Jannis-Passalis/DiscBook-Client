import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";

export default function LogOutButton() {
  const dispatch = useDispatch();
  return (
    <Nav.Link href="/login">
      <Button
        className="mr-sm-2"
        variant="outline-info"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Nav.Link>
  );
}
