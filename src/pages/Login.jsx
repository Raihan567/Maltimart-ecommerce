import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Helmet title="Login">
      <section className="login__section">
        <Container>
          <Row>
            <Col lg="6" className="text-center m-auto">
              <h3>Log-In</h3>
              <form className="auth__form">
                <FormGroup>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button type="submit" className="buy__btn auth__btn ">Login</button>
                <p className="mt-3">
                  Don't have any account?{" "}
                  <Link to="signup">Create na Account.</Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
