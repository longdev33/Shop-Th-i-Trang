import React from "react";
import { useSelector } from "react-redux";
import { Button, CardImg } from "reactstrap";

function ResultFormItem(props) {
  let { onHandleDeleteProduct, onhandleShowEditProduct } = props;

  let useRedux = useSelector((state) => state);
  let listProduct = useRedux.productRedux.listProduct;
  // console.log("listProduct:", listProduct);

  // Nút Delete
  let handleClickDeleteProduct = (idDelete) => {
    onHandleDeleteProduct(idDelete);
  };

  // Nút Edit
  let handleShowEditProduct = (product) => {
    onhandleShowEditProduct(product);
  };

  // Hàm lấy tên ảnh
  let getImageName = (pathImage) => {
    let array = pathImage.split("\\");
    let imageName = array[array.length - 1];
    return imageName;
  };

  // Load danh sách Product
  let itemProduct = "";
  itemProduct = listProduct.map((product, index) => {
    return (
      <>
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.info}</td>
          <td>{product.detail}</td>
          <td>{product.ratingStar}</td>
          <td>
            <CardImg
              src={require(`../../Asset/Product/${product.imageName}`)}
              style={{ width: "56px" }}
            />
          </td>
          <td>{product.manufacturerName}</td>
          <td>{product.categoryName}</td>
          <td>
            <Button
              color="warning"
              onClick={() => handleShowEditProduct(product)}
            >
              Edit
            </Button>
          </td>
          <td>
            <Button
              color="danger"
              onClick={() => handleClickDeleteProduct(product.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  });
  return itemProduct;
}

export default ResultFormItem;
