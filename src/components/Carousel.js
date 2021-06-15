import React from 'react';
import { Carousel } from "react-bootstrap";

function CarouselComp(props) {
  return (
    <> 
      <Carousel>
        <Carousel.Item className="carousel-container">
          <img
            className="d-block w-100"
            src="https://vastphotos.com/files/uploads/photos/10318/high-resolution-new-york-skyline-sunset-l.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="carousel-container">
          <img
            className="d-block w-100"
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-cincinnati-skyline-ohio-veni.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="carousel-container">
          <img
            className="d-block w-100"
            src="https://photos.smugmug.com/Galleries/Geography/North-America/Ohio/i-FK9zxDq/0/21aa4bd4/L/100MP_Ohio_Cincinnati%20Panorama_3to1_144x48-L.jpg"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

    </>
  );
};

export default CarouselComp;