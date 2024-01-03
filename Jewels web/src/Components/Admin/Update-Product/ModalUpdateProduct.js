import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useSelector } from "react-redux";
import InputUpdateForm from "./InputUpdateForm";

function ModalUpdateProduct(props) {
  //
  let { onhandleCloseEditProduct, onHandleClickUpdate, selectProduct } = props;

  let handleCloseEditProduct = () => {
    onhandleCloseEditProduct();
  };

  // useSelector: lấy các State đang được quản lý bởi Redux
  let stateRedux = useSelector((state) => state);

  // Show Update Form
  let showUpdateForm = stateRedux.updateFormRedux.showUpdateForm;

  return (
    <Container>
      <Modal isOpen={showUpdateForm}>
        <ModalHeader>Update Product</ModalHeader>
        <ModalBody>
          <InputUpdateForm
            onHandleClickUpdate={onHandleClickUpdate}
            selectProduct={selectProduct}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseEditProduct}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateProduct;
