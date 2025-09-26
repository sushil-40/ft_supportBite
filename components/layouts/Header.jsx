import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_supportBite.png";

const Header = () => {
  return (
    <Navbar expand="md" fixed="top" className="p-2 header">
      <Container fluid>
        <Link to="/">
          <img src={logo} width="150px" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-dark">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/about">
              How It Works
            </Link>
            <Link className="nav-link" to="/about">
              FAQ
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
