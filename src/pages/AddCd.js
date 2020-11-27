import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function AddCd() {
  const [cdSearch, setCdSearch] = useState("");
  const dispatch = useDispatch();

  function SubmitNewCdSearch(event) {
    console.log("hi, this is submit new cd search console.log");
    event.preventDefault();

    // dispatch(login(cdSearch));

    setCdSearch("");
  }

  return (
    <div>
      <h3 className="App">
        Search for the CD you want to add to your collection.
      </h3>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={cdSearch}
          onChange={(event) => setCdSearch(event.target.value)}
        />
        <Button
          variant="outline-dark"
          type="submit"
          onClick={SubmitNewCdSearch}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}
