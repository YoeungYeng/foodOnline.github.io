import React from "react";
import Header from "../Header.jsx/Header";
import Footer from "../Footer/Footer";
import Routers from "../../route/Routers";
import Carts from "../UI/category/cart/Cart";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartUiSlice);

  return (
    <div>
      {/* Header */}
      <Header />
      {showCart && <Carts />}

      {/* body */}
      <div>
        <Routers />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
