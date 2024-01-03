import React from "react";
import BannerSlide from "./BannerSlide/BannerSlide";
import News from "./News/News";
import Product from "./Product/Product";

function Home(props) {
  return (
    <>
      <BannerSlide />
      <Product />
      <News />
    </>
  );
}

export default Home;
