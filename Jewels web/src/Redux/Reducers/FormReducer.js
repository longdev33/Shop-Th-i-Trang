import { CLOSE_FORM, SHOW_FORM } from "../Contants/ActionType";

let initialState = {
  showForm: false,
};

// Thực hiện khai báo Reducer
export let formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      //
      //
      return {
        ...state,
        showForm: true,
      };
    case CLOSE_FORM:
      //
      //
      return {
        ...state,
        showForm: false,
      };
    default:
      return {
        ...state,
      };
  }
};
