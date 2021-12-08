import React from "react";

import LinkStyled from "../../../../components/LinkStyled";

import latest from "./latest.module.css";

import ProductCard from "../../../../components/ProductCard";

function LatestProducts() {
  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/collections" text="See more products" />
      <div className={latest.cards}>
        {[1, 2, 3, 4].map((el, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
