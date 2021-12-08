import React from "react";
import { Link } from "react-router-dom";

import product from "./product.module.css";

const link =
  "https://ih1.redbubble.net/image.334302654.3818/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u7.jpg";

function ProductCard() {
  return (
    <div className={product.container}>
      <Link to="/product/id">
        <img src={link} alt="product card" className={product.image} />
      </Link>
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
