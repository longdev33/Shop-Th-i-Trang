// import "./SignIn.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavLink,
  Row,
} from "reactstrap";

function SignIn(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={6} style={{ textAlign: "center", left: "280px" }}>
          <Form>
            <Label for="exampleEmail">Email</Label>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                style={{ border: "1px solid #b5e4f2" }}
              />
            </FormGroup>
            <Label for="examplePassword">Password</Label>
            <FormGroup>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                style={{ border: "1px solid #b5e4f2" }}
              />
            </FormGroup>
            <Button style={{ border: "1px solid #b5e4f2" }}>Sign In</Button>
            <Nav>
              <Link to="/signUp">Forgot PassWord?</Link>
            </Nav>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
