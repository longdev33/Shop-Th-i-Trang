import { CLOSE_UPDATE_FORM, SHOW_UPDATE_FORM } from "../Contants/ActionType";

let initialState = {
  showUpdateForm: false,
};

// Thực hiện khai báo Reducer
export let updateFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_UPDATE_FORM:
      return {
        ...state,
        showUpdateForm: true,
      };

    case CLOSE_UPDATE_FORM:
      return {
        ...state,
        showUpdateForm: false,
      };

    default:
      return {
        ...state,
      };
  }
};
