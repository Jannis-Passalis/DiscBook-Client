import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default function AddCd() {
  return (
    <div>
      <h3 className="App">
        Search for the CD you want to add to your collection.
      </h3>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </div>
  );
}
