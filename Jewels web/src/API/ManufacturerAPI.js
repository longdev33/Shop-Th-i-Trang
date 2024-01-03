import { api } from "./api";

// Lấy danh sách Manufacturer
let GETListManufacturerAPI = () => {
  return api("GET", "manufacturers", null);
};

export { GETListManufacturerAPI };
