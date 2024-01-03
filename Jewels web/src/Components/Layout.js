import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import { routes } from "../Router/Route";

function Layout(props) {
  return (
    <>
      {/* Tiêu đề */}
      <Header />

      <Menu />

      {/* Điều hướng */}
      {routes}
      {/* <Home /> */}

      {/* <HomePage /> */}
      <Footer />
    </>
  );
}

export default Layout;
