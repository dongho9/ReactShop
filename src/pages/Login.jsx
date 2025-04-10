import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useAuth } from "../AuthContext";
const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  input[type="email"],
  input[type="password"] {
    margin: 0 0 10px;
    padding: 14px 20px;
    &::placeholder {
      font-size: 1.3rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    font-size: 1.6rem;
  }
`;
const Login = () => {
  const { setAuthenticate } = useAuth();
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
