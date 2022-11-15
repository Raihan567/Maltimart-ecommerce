import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import "./Header.css";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "shop",
    display: "Shop",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef();

  // toggle mobile Menu
  const toggleMenu = () => menuRef.current.classList.toggle("nav__active");

  // navigate to the cart
  const goToCart = () => {
    navigate("cart");
  };
  return (
    <header className="header sticky-top border-bottom">
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* Logo  */}
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
              <Link className="text-decoration-none" to="/home">
                <h1>Multi-mart</h1>
              </Link>
            </div>

            {/* Navigation */}
            <div className="navigation">
              <div className="nav__link">
                <ul className="menu">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* nav-icon */}
            <div className="nav__icon">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i onClick={goToCart} className="ri-shopping-bag-line"></i>
                <span className="badge">3</span>
              </span>
              <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
            </div>

            {/* Mobile Menu */}
            <div className="mobile__menu">
              <span onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
