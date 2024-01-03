import React from "react";
import { CardImg, Col, Container, Row } from "reactstrap";
import "./News.css";

function News(props) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Row className="title-news">
              <p>Tin tức</p>
            </Row>

            <Row>
              <p style={{ textAlign: "center", fontStyle: "italic   " }}>
                Hiểu thời trang và thật thời trang mỗi ngày!
              </p>
            </Row>

            <Row>
              <Col xs={9} md={9}>
                <CardImg
                  src={require("../../../Asset/Banner/Banner1.jpg")}
                  style={{ width: "100%" }}
                />
              </Col>

              <Col xs={3} md={3}>
                <p
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                  }}
                >
                  Bài được xem nhiều nhất
                </p>

                <Col xs={6} md={6}>
                  <CardImg
                    src={require("../../../Asset/Product/Product2.jpg")}
                    style={{ width: "100%" }}
                  />
                </Col>

                <Col xs={6} md={6}>
                  <p>About us</p>
                  <p>28-08-2020</p>
                  <p>TIN TỨC</p>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default News;
