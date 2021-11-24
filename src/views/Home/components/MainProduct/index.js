import React from "react";

import product from "./product.module.css";

function MainProduct() {
  return (
    <div className={product.container}>
      <img alt="main product" className={product.image} />
    </div>
  );
}

export default MainProduct;
