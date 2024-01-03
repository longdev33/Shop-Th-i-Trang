import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

function AddButton(props) {
  //
  let { onHandleAddNewProduct } = props;
  let HandleClickAddNewProduct = () => {
    onHandleAddNewProduct();
  };
  return (
    <Container style={{ height: "80px" }}>
      <Row>
        <Col xs={6} md={6}>
          <h3>Product Management</h3>
        </Col>
        <Col xs={6} md={6}>
          <Button
            color="info"
            style={{
              float: "right",
              margin: "22px 38px",
              padding: "8px 40px",
            }}
            onClick={HandleClickAddNewProduct}
          >
            Add product
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddButton;
