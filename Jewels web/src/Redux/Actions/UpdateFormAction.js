import { CLOSE_UPDATE_FORM, SHOW_UPDATE_FORM } from "../Contants/ActionType";

export let actionShowUpdateForm = () => {
  return {
    type: SHOW_UPDATE_FORM,
  };
};

export let actionCloseUpdateForm = () => {
  return {
    type: CLOSE_UPDATE_FORM,
  };
};
