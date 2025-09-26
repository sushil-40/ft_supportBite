import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import heroBg from "../../assets/bg1.png";
const HomePage = () => {
  return (
    <div className="container pt-5">
      <Row>
        <Col md="6">
          <h1>
            Share Food. <br />
            Support <br />
            Community.
          </h1>
          <span>
            SupportBite connects donors and receivers to reduce food waste and
            support those in need.
          </span>
          <br />

          <Button variant="success" className="mt-5">
            Explore Food
          </Button>
        </Col>
        <Col className="hero-right" md={6}>
          {/* <img src={heroBg} alt="heroBg" /> */}
        </Col>
      </Row>
      <Row className="mt-3">
        <Row>
          <Col>
            <h3 className="text-center">Why SupportBite?</h3>
          </Col>
        </Row>
        <Row className="ms-0 gx-4 gy-4 mt-3 custom-row">
          <Col xs={12} md={3} className=" text-center ">
            <div className="neumo-card">
              <h4>Post Food Easily</h4>
              <p>Quickly upload surplus food to share with your community.</p>
            </div>
          </Col>
          <Col xs={12} md={3} className=" text-center ">
            <div className="neumo-card">
              <h4>Find Nearby Listings</h4>
              <p>Use your location to find food that's close to you.</p>
            </div>
          </Col>
          <Col xs={12} md={3} className="  text-center">
            <div className="neumo-card">
              <h4>Safe & Verified</h4>
              <p>Community reviews and reports keep everything safe.</p>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="mt-5 get-started text-center text-white">
        <Col className="p-2">
          <h2>Ready to Share or Receive?</h2>
          <p>Sign up today and join a growing food-sharing community.</p>
          <Button variant="light" className="mt-2">
            Get Started
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
