import { PUTProductAPI } from "../../API/ProductAPI";
import { PRODUCT_UPDATE } from "../Contants/ActionType";
import { actionFetchListProductAPI } from "./ProductAction";

// Action load dữ liệu Product
export let actionUpdateProductAPI = (productUpdateAPI) => {
  return (dispatch) => {
    return PUTProductAPI(productUpdateAPI).then((res) => {
      // console.log("res:", res);
      dispatch(actionUpdateProductRedux(res));
    });
  };
};

export let actionUpdateProductRedux = (productUpdate) => {
  return {
    type: PRODUCT_UPDATE,
    payload: productUpdate,
  };
};
