import React from "react";
import Circle from "react-loader-spinner";

import ProductCard from "../ProductCard";
import LinkStyled from "../LinkStyled";

import latest from "./latest.module.scss";
import useFetch from "../../hooks/useFetch";

function LatestProducts() {
  const [products, loading] = useFetch(
    "https://code-store-backend.herokuapp.com/api/collections/hoddie/products"
  );

  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/collections" text="See more products" />
      <div className={latest.cards}>
        {loading && <Circle type="ThreeDots" color="black" />}
        {products?.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default LatestProducts;
