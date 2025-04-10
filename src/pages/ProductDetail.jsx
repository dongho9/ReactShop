import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
const Img = styled.img`
  width: 100%;
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ProductTitle = styled.div`
  font-size: 1.8rem;
`;
const ProductPrice = styled.div`
  font-size: 1.8rem;
`;
const ProductChoice = styled.div`
  font-weight: 600;
  font-size: 2rem;
`;
const Wrapper = styled.div`
  margin-top: 50px;
  button {
    padding: 20px;
    width: 50%;
  }
`;
const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoading(true);
    const url = `http://localhost:3000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setProduct(data);
  };
  const FormattedPriceNew = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Wrapper>
          <Row>
            <Col className="me-4 d-flex justify-content-end">
              <Img src={product?.img} alt={product?.id} />
            </Col>
            <Col>
              <ProductDesc>
                <ProductTitle>상품명 : {product?.title}</ProductTitle>
                <ProductPrice>상품가격 : {FormattedPriceNew}</ProductPrice>
                <ProductChoice>{product?.sale ? "슈퍼세일" : ""}</ProductChoice>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {selectedSize}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product?.size.length > 0 &&
                      product?.size.map((item, i) => (
                        <Dropdown.Item
                          key={i}
                          href="#"
                          onClick={() => setSelectedSize(item)}
                        >
                          {item}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark">장바구니</Button>
                <Button variant="danger">상품결제</Button>
              </ProductDesc>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    );
  }
};

export default ProductDetail;
