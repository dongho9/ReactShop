import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProdcuts();
  }, []);
  const getProdcuts = async () => {
    let searchQuery = query.get("q"); // ← 홑따옴표도 OK

    console.log(searchQuery);
    // const url = `http://localhost:3000/products?q=${searchQuery}`;
    const url = searchQuery
      ? `http://localhost:3000/products?q=${searchQuery}`
      : `http://localhost:3000/products`;

    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  return (
    <Container>
      <Row className="justify-content-center">
        {productList.map((menu, i) => (
          <Col key={i} className="mb-4" xs={12} sm={6} md={4} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
