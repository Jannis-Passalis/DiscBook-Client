import React from "react";
import { Carousel, Container, Jumbotron } from "react-bootstrap";

export default function WelcomePage() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to DiscBook</h1>
          <p>
            Share here your CD collections with other collectors. Share,
            compare, trade and have your list available to see online any time
            with DiscBook.
          </p>
        </Container>
      </Jumbotron>
      <Carousel className="carouselPictures">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://variety.com/wp-content/uploads/2017/04/rexfeatures_5801083a.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.yimg.com/aah/yhst-73969762682587/pink-floyd-cd-welcome-to-the-machine-62.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://my.lwv.org/sites/default/files/leagues/fresno/joinus.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
