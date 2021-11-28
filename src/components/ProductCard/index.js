import React from "react";

import product from "./product.module.css";
import image from "../../assets/latest.jpg";

function ProductCard() {
  return (
    <div className={product.container}>
      <img src={image} alt="product card" className={product.image} />
      <span className={product.title}>Complexion Cream</span>
      <p className={product.text}>
        Anti-aging complexion cream for medium to dry skin. Nourish your face
        with a natural vitamin burst for that perfectly balanced glow.
      </p>
      <span className={product.price}>$32.00</span>
    </div>
  );
}

export default ProductCard;
