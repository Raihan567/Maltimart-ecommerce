import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Cart.css";
import proImg from "../assets/images/arm-chair-01.jpg";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/Ui/CommonSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <Container>
        <section className="cart__section">
          <Row>
            <Col lg="9">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img className="w-25 img-fluid" src={proImg} alt="" />
                    </td>
                    <td>ArmChair</td>
                    <td className="price">$324</td>
                    <td>1</td>
                    <td>
                      <i className="ri-delete-bin-7-line"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col lg="3">
              <div className="d-flex align-items-center justify-content-between">
                <h4>Subtotal</h4>
                <span className="fs-5 fw-bold">$Total Amount</span>
              </div>
              <p className="mt-3">Taxed and shipping will calculate in checkout page</p>
              <div>
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/checkout">Checkout</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </Helmet>
  );
};

export default Cart;
