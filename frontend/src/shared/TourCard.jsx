import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./tour-card.css";
import calculatingAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  if (!tour) {
    // Handle the case when the 'tour' object is undefined or null
    return null;
  }
  const { _id, title, photo, city, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculatingAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <Link to={`/tours/${_id}`}>
            <img src={photo} alt="tour-img" />
          </Link>

          {featured && <span>Featured</span>}
        </div>
        <Card.Body>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center mt-3 justify-content-between">
            <h5>
              ${price}
              <span>/per person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourCard;
