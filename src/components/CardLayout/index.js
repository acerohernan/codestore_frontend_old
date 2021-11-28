import React from "react";
import Header from "../Header";
import Explore from "../../views/Home/components/Explore";
import Follow from "../../views/Home/components/Follow";
import Footer from "../Footer";
import Copyright from "../Copyright";

function CardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Explore />
      <Follow />
      <Footer />
      <Copyright />
    </>
  );
}

export default CardLayout;
