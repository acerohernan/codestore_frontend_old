import React from "react";
import Header from "../Header";
/* import Footer from "../Footer"; */

function CardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default CardLayout;
