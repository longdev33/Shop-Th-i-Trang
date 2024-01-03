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

function InputUpdateForm(props) {
  //
  let { onHandleClickUpdate, selectProduct } = props;

  //
  let stateRedux = useSelector((state) => state);
  let listCategory = stateRedux.categoryRedux.listCategory;
  let listManufacturer = stateRedux.manufacturerRedux.listManufacturer;

  //
  let [ID, setID] = useState(selectProduct.id);
  let [NameUpdate, setNameUpdate] = useState(selectProduct.name);
  let [PriceUpdate, setPriceUpdate] = useState(selectProduct.price);
  let [InfoUpdate, setInfoUpdate] = useState(selectProduct.info);
  let [DetailUpdate, setDetailUpdate] = useState(selectProduct.detail);
  let [StarUpdate, setStarUpdate] = useState(selectProduct.ratingStar);
  let [ImageUpdate, setImageUpdate] = useState("");
  let [ManufacturerUpdate, setManufacturerUpdate] = useState(
    selectProduct.manufacturerName
  );
  let [CategoryUpdate, setCategoryUpdate] = useState(
    selectProduct.categoryName
  );

  // Hàm lấy tên ảnh
  let getImageName = (pathImage) => {
    let array = pathImage.split("\\");
    let imageName = array[array.length - 1];
    return imageName;
  };

  // Rest lại thông tin trong Input Form
  let HandleClickUpdate = () => {
    //
    let productUpdate = {
      id: ID,
      name: NameUpdate,
      price: PriceUpdate,
      info: InfoUpdate,
      detail: DetailUpdate,
      ratingStar: StarUpdate,
      imageName: getImageName(ImageUpdate),
      manufacturerName: ManufacturerUpdate,
      categoryName: CategoryUpdate,
    };

    onHandleClickUpdate(productUpdate);
  };

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
            ID
          </Label>
          <Col sm={10}>
            <Input type="text" className="form-control" disabled value={ID} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              value={NameUpdate}
              type="text"
              onChange={(event) => setNameUpdate(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Price" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              value={PriceUpdate}
              type="text"
              onChange={(event) => setPriceUpdate(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Info" sm={2}>
            Info
          </Label>
          <Col sm={10}>
            <Input
              value={InfoUpdate}
              type="textarea"
              onChange={(event) => setInfoUpdate(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Detail" sm={2}>
            Detail
          </Label>
          <Col sm={10}>
            <Input
              value={DetailUpdate}
              type="text"
              placeholder="Input Detail"
              onChange={(event) => setDetailUpdate(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Star" sm={2}>
            Star
          </Label>
          <Col sm={10}>
            <Input
              value={StarUpdate}
              type="number"
              onChange={(event) => setStarUpdate(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Image" sm={2}>
            Image
          </Label>
          <Col sm={10}>
            <Input
              value={ImageUpdate}
              type="file"
              onChange={(event) => setImageUpdate(event.target.value)}
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
              value={ManufacturerUpdate}
              type="select"
              onChange={(event) => setManufacturerUpdate(event.target.value)}
            >
              <option value="0">--- {ManufacturerUpdate} ---</option>
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
              value={CategoryUpdate}
              type="select"
              onChange={(event) => setCategoryUpdate(event.target.value)}
            >
              <option value="0">--- {CategoryUpdate} ---</option>
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
            <Button color="primary" onClick={HandleClickUpdate}>
              Update
            </Button>
            <Button color="warning" style={{ marginLeft: "10px" }}>
              Reset
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default InputUpdateForm;
