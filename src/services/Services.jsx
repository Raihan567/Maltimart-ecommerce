import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import serviceDetails from "../assets/data/serviceData";
import "./Services.css";

const Services = () => {
  return (
    <section className="service__section">
      <Container>
        <Row>
          {serviceDetails.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
