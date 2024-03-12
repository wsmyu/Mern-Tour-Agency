import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection.jsx";
import "../styles/tour.css";
import TourCard from "./../shared/TourCard.jsx";
import SearchBar from "./../shared/SearchBar.jsx";
import Newsletter from "./../shared/Newsletter.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";

const TourPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0);
  }, [page, tourCount]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4>Loading...</h4>}
          {error && <h4>{error}</h4>}
          {!loading &&
            !error &&
            (
              <Row>
                {tours?.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
                <Col lg="12">
                  <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                    {[...Array(pageCount).keys()].map((number) => (
                      <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? "active__page" : ""}
                      >
                        {number + 1}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourPage;
