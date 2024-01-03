import { api } from "./api";

// Lấy danh sách Product
const GETListProductAPI = () => {
  return api("GET", "products", null);
};

// Thêm mới sản phẩm Product
const POSTNewProductAPI = (newProduct) => {
  return api("POST", "products", newProduct);
};

// Xóa mới sản phẩm Product
const DELETEProductAPI = (idDelete) => {
  let url = "products/" + idDelete;
  return api("DELETE", url, null);
};

// Sửa mới sản phẩm Product
const PUTProductAPI = (productUpdate) => {
  let url = "products/" + productUpdate.id;
  return api("PUT", url, productUpdate);
};

export {
  GETListProductAPI,
  POSTNewProductAPI,
  PUTProductAPI,
  DELETEProductAPI,
};
