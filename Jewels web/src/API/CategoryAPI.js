import { api } from "./api";

// Lấy danh sách Category
let GETListCategoryAPI = () => {
  return api("GET", "categorys", null);
};

export { GETListCategoryAPI };
