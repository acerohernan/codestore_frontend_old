import React from "react";
import { Link } from "react-router-dom";

import product from "./product.module.css";

const link =
  "https://ih1.redbubble.net/image.334302654.3818/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u7.jpg";

function ProductCard({ name, price, description, image }) {
  return (
    <Link to="/product/id" className={product.linkContainer}>
      <div className={product.container}>
        <img src={image} alt="product card" className={product.image} />
        <span className={product.title}>{name}</span>
        <p className={product.text}>{description}</p>
        <span className={product.price}>{`$${price}.00`}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
