import React from "react";
import GalleryImage from "./GalleryImage";
import { Carousel } from "react-bootstrap";
import './gallery.css'

const CarouselGallery = () => {
  return (
    <Carousel>
      {GalleryImage.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselGallery;
