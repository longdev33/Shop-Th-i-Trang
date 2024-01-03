import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputAddProductForm from "./InputAddProductForm";
import { useSelector } from "react-redux";

function ModalAddNewProduct(props) {
  //
  let { onHandleCloseForm, onHandleAddProduct } = props;

  let HandleClickCloseForm = () => {
    onHandleCloseForm();
  };

  // useSelector: lấy các State đang được quản lý bởi Redux
  let stateRedux = useSelector((state) => state);

  // Show Form
  let showForm = stateRedux.formRedux.showForm;

  return (
    <Container>
      <Modal isOpen={showForm}>
        <ModalHeader>Create New Product</ModalHeader>
        <ModalBody>
          <InputAddProductForm onHandleAddProduct={onHandleAddProduct} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={HandleClickCloseForm}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalAddNewProduct;
