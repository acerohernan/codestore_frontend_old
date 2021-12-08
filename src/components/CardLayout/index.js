import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "../Header";
import Explore from "../../views/Home/components/Explore";
import Follow from "../../views/Home/components/Follow";
import Footer from "../Footer";
import Copyright from "../Copyright";
import Cart from "../Cart";

function CardLayout({ children }) {
  const [openCart, setOpenCart] = useState(true);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <Header />
      {children}
      <Explore />
      <Follow />
      <Footer />
      <Copyright />
      {openCart &&
        ReactDOM.createPortal(
          <Cart handleOpenCart={handleOpenCart} />,
          document.getElementById("modal")
        )}
    </>
  );
}

export default CardLayout;
