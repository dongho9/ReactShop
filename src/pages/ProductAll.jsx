import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [query] = useSearchParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProdcuts();
  }, [query]);

  const getProdcuts = async () => {
    const searchQuery = query.get("q") || "";
    console.log("쿼리값:", searchQuery);

    let url = `https://my-json-server.typicode.com/dongho9/ReactShop/products/?q=${searchQuery}`;
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

// https://my-json-server.typicode.com/dongho9/ReactShop
