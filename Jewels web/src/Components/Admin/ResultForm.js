import React from "react";
import ResultFormItem from "./ResultFormItem";
import { Container, Table } from "reactstrap";

function ResultForm(props) {
  //
  let { onHandleDeleteProduct, onhandleShowEditProduct } = props;

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Info</th>
            <th>Detail</th>
            <th>Star</th>
            <th>Image</th>
            <th>Manufacturer</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem
            onHandleDeleteProduct={onHandleDeleteProduct}
            onhandleShowEditProduct={onhandleShowEditProduct}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultForm;
