import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StoreRedux } from "./Redux/Store/StoreRedux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={StoreRedux}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
