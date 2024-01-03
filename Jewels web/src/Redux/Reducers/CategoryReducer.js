import { FETCH_LIST_CATEGORY } from "../Contants/ActionType";

let initialState = {
  listCategory: [],
};

export let categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_CATEGORY:
      return {
        ...state,
        listCategory: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
