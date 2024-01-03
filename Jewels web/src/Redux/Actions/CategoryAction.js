import { GETListCategoryAPI } from "../../API/CategoryAPI";
import { FETCH_LIST_CATEGORY } from "../Contants/ActionType";

export let actionFetchListCategoryAPI = () => {
  return (dispatch) => {
    return GETListCategoryAPI().then((res) => {
      dispatch(actionFetchListCategoryRedux(res));
    });
  };
};

// Truyền dữ liệu API lấy được vào Redux
export let actionFetchListCategoryRedux = (listCategoryAPI) => {
  return {
    type: FETCH_LIST_CATEGORY,
    payload: listCategoryAPI,
  };
};
