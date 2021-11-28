import React from "react";

import ProductCard from "../../components/ProductCard";
import collections from "./collections.module.css";

function Collections() {
  return (
    <div className={collections.container}>
      <div className={collections.section}>
        <h4 className={collections.title}>Facial Products</h4>
        <div className={collections.cards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className={collections.section}>
        <h4 className={collections.title}>Hair Products</h4>
        <div className={collections.cards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className={collections.section}>
        <h4 className={collections.title}>Body Products</h4>
        <div className={collections.cards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Collections;
