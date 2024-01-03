import {
  DELETE_PRODUCT,
  FETCH_LIST_PRODUCT,
  PRODUCT_UPDATE,
} from "../Contants/ActionType";

let initialState = {
  listProduct: [],
};

// Thực hiện khai báo Reducer
export let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_PRODUCT:
      return {
        ...state,
        listProduct: action.payload,
      };

    case DELETE_PRODUCT:
      let idDelete = action.payload;
      let listProductState = state.listProduct;
      let indexDelete = listProductState.findIndex(
        (product) => product.id === idDelete
      );
      listProductState.splice(indexDelete, 1);
      return {
        ...state,
        listProduct: listProductState,
      };

    case PRODUCT_UPDATE:
      const products = [...state.listProduct];

      const listProducts = products.map((p) => {
        if (p.id === action.payload.id) {
          return { ...action.payload };
        }
        return {
          ...p,
        };
      });

      return {
        ...state,
        listProduct: listProducts,
      };
    default:
      return {
        ...state,
      };
  }
};
