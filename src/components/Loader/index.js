import React from "react";
import Circle from "react-loader-spinner";

import loader from "./loader.module.scss";

function Loader() {
  return (
    <div className={loader.container}>
      <Circle type="ThreeDots" color="black" />
    </div>
  );
}

export default Loader;
