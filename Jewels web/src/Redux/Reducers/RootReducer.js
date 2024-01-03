import { combineReducers } from "redux";
import { categoryReducer } from "./CategoryReducer";
import { formReducer } from "./FormReducer";
import { manufacturerReducer } from "./ManufacturerReducer";
import { productReducer } from "./ProductReducer";
import { updateFormReducer } from "./UpdateFormReducer";

export let RootReducer = combineReducers({
  formRedux: formReducer,
  productRedux: productReducer,
  categoryRedux: categoryReducer,
  manufacturerRedux: manufacturerReducer,
  updateFormRedux: updateFormReducer,
});
