import React from "react";

import Header from "./components/Header";

import thanks from "./thanks.module.css";

function Thanks() {
  return (
    <div className={thanks.container}>
      <Header />
    </div>
  );
}

export default Thanks;
