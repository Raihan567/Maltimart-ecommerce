import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/ProductCard.css";
const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <Link to={`shop/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </Link>
        </div>
        {/* product info */}
        <div className="product__info">
          <h3 className="product__name">
            <Link to={`shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__cart-bottom d-flex align-items-center justify-content-between mt-2 p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
