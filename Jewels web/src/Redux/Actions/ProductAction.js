import {
  GETListProductAPI,
  POSTNewProductAPI,
  DELETEProductAPI,
} from "../../API/ProductAPI";
import { DELETE_PRODUCT, FETCH_LIST_PRODUCT } from "../Contants/ActionType";

// Action load dữ liệu Product
export let actionFetchListProductAPI = () => {
  return (dispatch) => {
    return GETListProductAPI().then((res) => {
      dispatch(actionFetchListProductRedux(res));
    });
  };
};

export let actionFetchListProductRedux = (listProductAPI) => {
  return {
    type: FETCH_LIST_PRODUCT,
    payload: listProductAPI,
  };
};

// Action thêm mới Product
export let actionAddProductAPI = (newProduct) => {
  return (dispatch) => {
    return POSTNewProductAPI(newProduct).then((res) => {
      dispatch(actionFetchListProductAPI());
    });
  };
};

// Action xóa dữ liệu 1 Product
export let actionDeleteProductAPI = (idDelete) => {
  return (dispatch) => {
    return DELETEProductAPI(idDelete).then((res) => {
      dispatch(actionDeleteProductRedux(res));
    });
  };
};

export let actionDeleteProductRedux = (idDelete) => {
  return {
    type: DELETE_PRODUCT,
    payload: idDelete,
  };
};
