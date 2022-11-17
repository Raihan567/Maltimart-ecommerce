import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md='4' className="mt-3">
            <div className="logo">
              <h1 className="text-white ">Multi-mart</h1>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              earum, ipsum facere obcaecati eos unde ducimus nulla praesentium
              fugiat accusantium?
            </p>
          </Col>
          <Col lg="3" md='4' className="mt-3">
            <div className="footer__quick-link">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroup className="mt-3">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Mobile Phones
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Modern Sofa
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Arm Chair
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Smart Watch
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    New Arrivals
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md='4' className="mt-3">
            <div className="footer__quick-link">
              <h4 className="quick__link-title">Useful Links</h4>
              <ListGroup className="mt-3">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Shop
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Login
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none " to="#">
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="">
                <ListGroupItem className="border-0  ps-0">
                  <Link className="text-decoration-none" to="#">
                    Terms & Condition
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='5' className="mt-3">
            <div className="footer__quick-link">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroup className="mt-3">
                <ListGroupItem className="d-flex align-items-center gap-2  border-0  ps-0">
                  <span>
                    <i class="bg-white rounded  ri-map-pin-line p-1"></i>
                  </span>
                  <p className="mb-2">Mymensingh, Dhaka</p>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center gap-2  border-0  ps-0">
                  <span>
                  <i class="ri-phone-fill bg-white p-1 rounded"></i>
                  </span>
                  <p className="mb-2">+880 17361 39593</p>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center gap-2  border-0  ps-0">
                  <span>
                    <i class="bg-white rounded  ri-mail-line p-1"></i>
                  </span>
                  <p className="mb-2">Mymensingh, Dhaka</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <hr className="mt-3" />
          <Col className="text-center py-3" lg="12">
            Copyright {year} Developed By Raihan. All right reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
