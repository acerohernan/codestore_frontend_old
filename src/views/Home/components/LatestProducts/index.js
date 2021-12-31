import React from "react";

import ProductCard from "../../../../components/ProductCard";
import LinkStyled from "../../../../components/LinkStyled";

import latest from "./latest.module.scss";
import { latestProducts } from "../../../../utils/products";

function LatestProducts() {
  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/collections" text="See more products" />
      <div className={latest.cards}>
        {latestProducts.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default LatestProducts;
