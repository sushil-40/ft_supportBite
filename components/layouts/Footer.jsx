import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer pt-4 pb-2 mt-5 text-center">
      <Container>
        <Row>
          {/* Logo/Brand */}
          <Col md={4} className="mb-3">
            <h4 className="fw-bold">SupportBite</h4>
            <p>Sharing food. Spreading smiles. Together we care.</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="/donate" className="text-white text-decoration-none">
                  Donate
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact & Social */}
          <Col md={4} className="mb-3">
            <h5 className="fw-semibold">Contact</h5>
            <p>Email: info@supportbite.org</p>
            <p>Phone: +61 123 456 789</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white fs-5">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} SupportBite. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
