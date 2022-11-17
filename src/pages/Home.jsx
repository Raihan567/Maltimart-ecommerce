import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import heroImg from "../assets/images/hero-img.png";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/Ui/ProductList";
import Services from "../services/Services";
import "../styles/Home.css";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/Ui/Clock";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    setTrendingProducts(filterTrendingProducts);
    setBestSalesProducts(filterBestSalesProducts);
    setMobileProducts(filterMobileProducts);
    setPopularProducts(filterPopularProducts);
    setWirelessProducts(filterWirelessProducts);
  }, []);

  return (
    <Helmet title="Home">
      <section className="hero__section ">
        <Container className="mt-5">
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

      {/*Trending Product  */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      {/* Best sales Products */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales Products</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      {/* Time Counter */}
      <section className="timer__counter">
        <Container>
          <Row>
            <Col lg="6">
              <div className="clock__top-counter">
                <h4 className="text-white fs-2  ">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-4">Quality ArmChair</h3>
              </div>
              <Clock />
            </Col>
            <Col lg="6">
              <img className="img-fluid" src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
