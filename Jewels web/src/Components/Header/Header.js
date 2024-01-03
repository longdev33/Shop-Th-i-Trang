import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/Header.css";
import {
  Col,
  Container,
  Row,
  CardImg,
  Form,
  Input,
  Button,
  Badge,
  Nav,
  NavItem,
} from "reactstrap";
import { FaPhoneAlt, FaSearch, FaShoppingCart } from "react-icons/fa";

function Header(props) {
  return (
    <Container>
      <Row className="header-container">
        {/* logo-img */}
        <Col xs={3} sm={3} className="img-logo">
          <Link to="/">
            <CardImg
              className="img"
              src={require("../../Asset/Logo/logo.png")}
              alt="Img-Logo"
            />
          </Link>
        </Col>

        {/* search button với search icon */}
        <Col xs={3} className="search">
          <Form className="search-button">
            <Input
              type="text"
              id="input"
              className="search-input"
              placeholder="What you want ?"
            />
            <Button className="search-icon icon">
              <FaSearch />
            </Button>
          </Form>
        </Col>

        {/*  */}
        <Col xs={3} sm={3} className="hotline">
          <Form className="hotline-form">
            <Button className="phone-icon icon">
              <FaPhoneAlt />
            </Button>
            <span>
              HOTLINE:
              <strong> 096 137 1576</strong>
            </span>
          </Form>
        </Col>

        {/* sign in + sign up */}
        <Col xs={3} sm={3} className="signup_login">
          <Nav>
            <NavItem className="header-icon">
              <Link to="/signUp">Đăng ký</Link>
            </NavItem>
            <div className="border-col"></div>

            <NavItem className="header-icon">
              <Link to="/signIn">Đăng nhập</Link>
            </NavItem>
            <div className="border-col"></div>

            <NavItem className="header-icon">
              <NavLink to="/admin">Admin</NavLink>
            </NavItem>
          </Nav>
        </Col>

        {/* buy */}
        <Col xs={2} sm={2}>
          <Row className="shopping-button">
            <Button className="shopping-icon icon">
              <FaShoppingCart />
            </Button>
            <Badge className="money-pay">0đ</Badge>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
