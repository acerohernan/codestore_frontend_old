import React from "react";

import ProductCard from "../../components/ProductCard";
import collections from "./collections.module.css";

function Collections() {
  return (
    <div className={collections.container}>
      <ProductCard />
    </div>
  );
}

export default Collections;
