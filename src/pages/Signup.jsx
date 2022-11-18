import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Helmet title="Signup">
      <section className="signup__section">
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3>Sign up</h3>
              <form className="auth__form">
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button type="submit" className="buy__btn auth__btn">
                  Create an Account
                </button>
                <p className="mt-3">
                  Already have an accoutn? <Link to="/login">Login here</Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
