import React, { useEffect, useState } from "react";
import AddButton from "../../Components/Admin/AddButton";
import ResultForm from "../../Components/Admin/ResultForm";
import ModalAddNewProduct from "../../Components/Admin/Modal-Add-Product/ModalAddNewProduct";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  actionCloseForm,
  actionShowForm,
} from "../../Redux/Actions/FormAction";
import {
  actionAddProductAPI,
  actionDeleteProductAPI,
  actionFetchListProductAPI,
} from "../../Redux/Actions/ProductAction";
import ModalUpdateProduct from "../../Components/Admin/Update-Product/ModalUpdateProduct";
import {
  actionCloseUpdateForm,
  actionShowUpdateForm,
} from "../../Redux/Actions/UpdateFormAction";
import { actionUpdateProductAPI } from "../../Redux/Actions/ProductUpdateAction";
import { actionFetchListManufacturerAPI } from "../../Redux/Actions/ManufacturerAction";
import { actionFetchListCategoryAPI } from "../../Redux/Actions/CategoryAction";

function AdminContainer(props) {
  let [selectProduct, setSelectProduct] = useState({});

  // Hook để dispatch các action
  let dispatchRedux = useDispatch();

  // Mở + Đóng ShowForm
  let onHandleAddNewProduct = () => {
    dispatchRedux(actionShowForm());
  };
  let onHandleCloseForm = () => {
    dispatchRedux(actionCloseForm());
  };

  // Mở + Đóng UpdateForm
  let onhandleShowEditProduct = (product) => {
    setSelectProduct(product);
    dispatchRedux(actionShowUpdateForm());
  };
  let onhandleCloseEditProduct = () => {
    dispatchRedux(actionCloseUpdateForm());
  };

  // Xóa Product
  let onHandleDeleteProduct = (idDelete) => {
    dispatchRedux(actionDeleteProductAPI(idDelete));
  };

  // Xử lý khi ấn nút Create ở InputAddProductForm để lấy thông tin New Product
  let onHandleAddProduct = (NewProduct) => {
    // Tạo NewProductAPI để đẩy thông tin nhập ở Form về API => hiển thị lại danh sách
    let NewProductAPI = {
      // id: NewProductAPI.id,
      name: NewProduct.name,
      price: NewProduct.price,
      info: NewProduct.info,
      detail: NewProduct.detail,
      ratingStar: NewProduct.ratingStar,
      imageName: NewProduct.imageName,
      manufacturerId: NewProduct.manufacturerName,
      categoryId: NewProduct.categoryName,
    };

    console.log("Image:", NewProduct.imageName);

    dispatchRedux(actionAddProductAPI(NewProductAPI));
    // Khi ấn nút tạo mới thì lập tức đóng Form lại
    dispatchRedux(actionCloseForm());
  };

  // Update Product
  let onHandleClickUpdate = (productUpdate) => {
    let productUpdateAPI = {
      id: productUpdate.id,
      name: productUpdate.name,
      price: productUpdate.price,
      info: productUpdate.info,
      detail: productUpdate.detail,
      ratingStar: productUpdate.ratingStar,
      imageName: productUpdate.imageName,
      manufacturerId: productUpdate.manufacturerName,
      categoryId: productUpdate.categoryName,
    };
    console.log("productUpdateAPI:", productUpdateAPI);
    dispatchRedux(actionUpdateProductAPI(productUpdateAPI));
    dispatchRedux(actionCloseUpdateForm());
  };

  useEffect(() => {
    // Load dữ liệu API
    dispatchRedux(actionFetchListProductAPI());
    dispatchRedux(actionFetchListManufacturerAPI());
    dispatchRedux(actionFetchListCategoryAPI());
  }, []);

  return (
    <Container>
      <ModalAddNewProduct
        onHandleCloseForm={onHandleCloseForm}
        onHandleAddProduct={onHandleAddProduct}
      />
      <ModalUpdateProduct
        onhandleCloseEditProduct={onhandleCloseEditProduct}
        onHandleClickUpdate={onHandleClickUpdate}
        selectProduct={selectProduct}
      />
      <AddButton onHandleAddNewProduct={onHandleAddNewProduct} />
      <ResultForm
        onHandleDeleteProduct={onHandleDeleteProduct}
        onhandleShowEditProduct={onhandleShowEditProduct}
      />
    </Container>
  );
}

export default AdminContainer;
