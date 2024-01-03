import thunk from "redux-thunk";
import { RootReducer } from "../Reducers/RootReducer";
const { createStore, applyMiddleware, compose } = require("redux");

const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export let StoreRedux = createStore(RootReducer, middleware);
