import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../../Components/Home/Home";
import { actionFetchListCategoryAPI } from "../../Redux/Actions/CategoryAction";
import { actionFetchListManufacturerAPI } from "../../Redux/Actions/ManufacturerAction";
import { actionFetchListProductAPI } from "../../Redux/Actions/ProductAction";

function HomeContainer(props) {
  // Hook để dispatch các action
  let dispatchRedux = useDispatch();

  useEffect(() => {
    // Load dữ liệu API
    dispatchRedux(actionFetchListProductAPI());
    dispatchRedux(actionFetchListManufacturerAPI());
    dispatchRedux(actionFetchListCategoryAPI());
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default HomeContainer;
