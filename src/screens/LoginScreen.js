import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function LoginScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // console.log(location);
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate({ pathname: redirect });
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();// 避免程序自动提交
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
