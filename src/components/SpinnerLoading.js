import React from "react";
import { Spinner } from "react-bootstrap";

export default function SpinnerLoading() {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
