import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Home.css";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            {/* Hero Section */}
            <Col lg="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make your Interior More minimalistic & modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  enim nam nisi blanditiis, ipsam quae optio dolore natus
                  quisquam eligendi.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Section */}
      <Services />
    </Helmet>
  );
};

export default Home;
