import { FETCH_LIST_MANUFACTURER } from "../Contants/ActionType";

let initialState = {
  listManufacturer: [],
};

export let manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_MANUFACTURER:
      return {
        ...state,
        listManufacturer: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
