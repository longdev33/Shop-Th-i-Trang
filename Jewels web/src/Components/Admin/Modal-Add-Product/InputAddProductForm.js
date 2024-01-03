import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";

function InputAddProductForm(props) {
  //
  let [Name, setName] = useState("");
  let [Price, setPrice] = useState("");
  let [Info, setInfo] = useState("");
  let [Detail, setDetail] = useState("");
  let [Star, setStar] = useState("");
  let [Image, setImage] = useState(null);
  let [Manufacturer, setManufacturer] = useState("");
  let [Category, setCategory] = useState("");

  //
  let { onHandleAddProduct } = props;
  //

  let stateRedux = useSelector((state) => state);
  let listCategory = stateRedux.categoryRedux.listCategory;
  let listManufacturer = stateRedux.manufacturerRedux.listManufacturer;

  // Hàm lấy tên ảnh
  let getImageName = (pathImage) => {
    let array = pathImage.split("\\");
    let imageName = array[array.length - 1];
    return imageName;
  };

  //
  let HandleClickAddProduct = () => {
    //
    let NewProduct = {
      name: Name,
      price: Price,
      info: Info,
      detail: Detail,
      ratingStar: Star,
      imageName: getImageName(Image),
      manufacturerName: Manufacturer,
      categoryName: Category,
    };
    console.log("Image:", Image);

    onHandleAddProduct(NewProduct);
  };

  // Rest lại thông tin trong Input Form
  let HandleClickReset = () => {};

  // Vòng lặp map hiển thị thông tin Category
  let categoryItem = listCategory.map((category, index) => {
    return (
      <option value={category.id} key={index}>
        {category.name}
      </option>
    );
  });

  // Vòng lặp map hiển thị thông tin Category
  let manufacturerItem = listManufacturer.map((manufacturer, index) => {
    return (
      <option value={manufacturer.id} key={index}>
        {manufacturer.name}
      </option>
    );
  });

  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="Name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="Name"
              name="name"
              placeholder="Input Name"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Price" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              id="Price"
              name="price"
              placeholder="Input Price"
              type="text"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Info" sm={2}>
            Info
          </Label>
          <Col sm={10}>
            <Input
              id="Info"
              name="info"
              placeholder="Input Info"
              type="textarea"
              onChange={(event) => {
                setInfo(event.target.value);
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Detail" sm={2}>
            Detail
          </Label>
          <Col sm={10}>
            <Input
              id="Detail"
              name="detail"
              type="text"
              placeholder="Input Detail"
              onChange={(event) => {
                setDetail(event.target.value);
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Star" sm={2}>
            Star
          </Label>
          <Col sm={10}>
            <Input
              id="Star"
              name="star"
              placeholder="Input Star"
              type="number"
              onChange={(event) => {
                setStar(event.target.value);
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Image" sm={2}>
            Image
          </Label>
          <Col sm={10}>
            <Input
              id="Image"
              name="image"
              type="file"
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
            <FormText>Hãy chọn ảnh có chọn lọc, pls !!!</FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Manufacturer" sm={2}>
            Manufacturer
          </Label>
          <Col sm={10}>
            <Input
              id="Manufacturer"
              name="manufacturer"
              type="select"
              onChange={(event) => {
                setManufacturer(event.target.value);
              }}
            >
              <option value="0">--- Choose a Manufacturer ---</option>
              {manufacturerItem}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Category" sm={2}>
            Category
          </Label>
          <Col sm={10}>
            <Input
              id="Category"
              name="category"
              type="select"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value="0">--- Choose a Category ---</option>
              {categoryItem}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button color="primary" onClick={HandleClickAddProduct}>
              Create
            </Button>
            <Button
              color="warning"
              style={{ marginLeft: "10px" }}
              onClick={HandleClickReset}
            >
              Reset
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default InputAddProductForm;
