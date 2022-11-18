import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import "../styles/Shop.css";
import ProductList from "../components/Ui/ProductList";
import products from "../assets/data/products";
const Shop = () => {
  const [productData, setProductData] = useState(products);

  // filter products
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    // filter by chair
    if (filterValue === "chair") {
      const chairProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(chairProducts);
    }

    // filter by sofa
    if (filterValue === "sofa") {
      const sofaProducts = products.filter((item) => item.category === "sofa");
      setProductData(sofaProducts);
    }

    // filter by mobile
    if (filterValue === "mobile") {
      const mobileProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(mobileProducts);
    }

    // filter by wireless
    if (filterValue === "wireless") {
      const wirelessProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(wirelessProducts);
    }

    // filter by watch
    if (filterValue === "watch") {
      const watchProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(watchProducts);
    }
  };

  // search for products matching
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    setProductData(searchProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <Container>
        <section>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select className="form" onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Headphone</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget ">
                <select className="form">
                  <option>Sort by Order</option>
                  <option value="Ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6">
              <div className="search__box ">
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="What are you looking for?"
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center fs-3">No Products are found!🙂</h1>
            ) : (
              <ProductList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
