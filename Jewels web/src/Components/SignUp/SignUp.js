import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

function SignUp(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={6} style={{ textAlign: "center", left: "280px" }}>
          <Label>Full name</Label>
          <FormGroup>
            <Input
              placeholder="Full Name"
              type=""
              style={{ border: "1px solid #b5e4f2" }}
            />
          </FormGroup>

          <Form>
            <Label for="exampleEmail">Email</Label>
            <FormGroup>
              <Input
                placeholder="Email"
                type="email"
                style={{ border: "1px solid #b5e4f2" }}
              />
            </FormGroup>

            <Label for="examplePassword">Password</Label>
            <FormGroup>
              <Input
                placeholder="Password"
                type="password"
                style={{ border: "1px solid #b5e4f2" }}
              />
            </FormGroup>

            <Label for="examplePassword">Submit Password</Label>
            <FormGroup>
              <Input
                placeholder="Submit Password"
                type="password"
                style={{ border: "1px solid #b5e4f2" }}
              />
            </FormGroup>
            <Button style={{ border: "1px solid #b5e4f2" }}>Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
