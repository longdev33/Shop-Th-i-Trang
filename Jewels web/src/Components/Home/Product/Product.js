import React from "react";
import "../Product/Product.css";
import { Button, CardImg, Col, Container, List, Row, Toast } from "reactstrap";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product(props) {
  let stateRedux = useSelector((state) => state);
  let listProduct = stateRedux.productRedux.listProduct;

  const handleClickShopping = () => {
    toast.success("THÊM THÀNH CÔNG !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <Container
        style={{
          backgroundColor: "#b5e4f2",
          borderRadius: "25px",
          marginTop: "45px",
        }}
      >
        <Row>
          <Col>
            <h3 className="title-product">SẢN PHẨM NỔT BẬT</h3>
          </Col>
        </Row>

        <Row>
          {listProduct.map((productItem, index) => {
            return (
              <Col xs={3} className="top-20px">
                <Col className="img-product ">
                  <CardImg
                    src={require(`../../../Asset/Product/${productItem.imageName}`)}
                    className="img-product"
                  />
                </Col>
                <Col>
                  <h4 className="text-center-title">{productItem.name}</h4>
                </Col>
                <Col style={{ color: "#d0021c" }}>
                  <h5 className="text-center">{productItem.price}</h5>
                </Col>
                <Col>
                  <p className="text-center">
                    Hãng sản xuất: {productItem.manufacturerName}
                  </p>
                </Col>
                <Col className="float-left" style={{ color: "#fb6e2e" }}>
                  <List type="inline" className="text-center">
                    Đánh giá: {productItem.ratingStar} <FaStar />
                  </List>
                </Col>
                <Col className="text-center">
                  <Button
                    className="button-shopping"
                    onClick={handleClickShopping}
                  >
                    <FaShoppingCart className="shopping-icon" />
                    Thêm vào giỏ hàng
                    <ToastContainer />
                  </Button>
                </Col>
              </Col>
            );
          })}
        </Row>

        {/*  */}
      </Container>
    </>
  );
}

export default Product;
