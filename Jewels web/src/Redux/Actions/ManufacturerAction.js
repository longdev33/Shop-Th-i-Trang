import { GETListManufacturerAPI } from "../../API/ManufacturerAPI";
import { FETCH_LIST_MANUFACTURER } from "../Contants/ActionType";

export let actionFetchListManufacturerAPI = () => {
  return (dispatch) => {
    return GETListManufacturerAPI().then((res) => {
      dispatch(actionFetchListManufacturerRedux(res));
    });
  };
};

// Truyền dữ liệu API lấy được vào Redux
export let actionFetchListManufacturerRedux = (listManufaturerAPI) => {
  return {
    type: FETCH_LIST_MANUFACTURER,
    payload: listManufaturerAPI,
  };
};
