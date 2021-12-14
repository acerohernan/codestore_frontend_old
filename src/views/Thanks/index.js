import React from "react";

import Header from "./components/Header";
import Details from "./components/Details";

import thanks from "./thanks.module.css";

function Thanks() {
  return (
    <div className={thanks.container}>
      <Header />
      <Details />
    </div>
  );
}

export default Thanks;
