import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Copyright from "../Copyright";

function CardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Copyright />
    </>
  );
}

export default CardLayout;
