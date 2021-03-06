import React from "react";
import { Button, Carousel, Container, Jumbotron, Nav } from "react-bootstrap";

export default function WelcomePage() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Welcome to DiscBook
          </h1>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Share here your CD collections with other collectors. Share,
            compare, trade and have your list available to see online any time
            with DiscBook.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Carousel className="carouselPictures">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/welcome.jpeg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Welcome</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/lookForCDs.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h2>Let's Look at some CDS</h2>
                  <Nav.Link href="/cds">
                    <Button variant="info">DiscBook CDs</Button>
                  </Nav.Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/gray-wall.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Join The DiscBook Family</h3>
                  <Nav.Link href="/signup">
                    <Button variant="info">Sign Up</Button>
                  </Nav.Link>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}
