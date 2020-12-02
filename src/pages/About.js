import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>About Us</h1>
          <p>
            <strong>Idea: </strong>DiscBook was inspired and created by Jannis
            Passalis, and completed with the help of the teachers and fellow
            students of the Codaisseur Academy.
          </p>
          <p>
            <strong>Why use DiscBook?</strong> DiscBook is an app created for CD
            lovers and collectors. Through this app you can have access to your
            CD collection from anywhere internet access is possible. So no more
            wondering if a CD you found in a store is already part of your
            collection. Furthermore, DiscBook let you share your CDs with
            others, so you are also able to compare your collection to that of
            others. This is useful because in this way you can find CDs you
            don't have in your own collection, or check if a CD of yours is
            actually rare or not. We definitely invite you to sign up and try it
            out.
          </p>
          <p>
            <strong>Tools and Dependencies: </strong>The main tools/dependencies
            used to make this app were: React, Redux, PostgreSQL, JEST, Express,
            Nodemailer, Cloudinary, Moment, Bootstrap, Axios.
          </p>
          <p>
            <strong>Contact: </strong> pasalis13@hotmail.com
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
