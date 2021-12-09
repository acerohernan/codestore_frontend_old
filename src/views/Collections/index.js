import React from "react";

import ProductCard from "../../components/ProductCard";
import collections from "./collections.module.css";

import { products } from "../../utils/products";
import toUpperCase from "../../utils/toUpperCase";

function Collections() {
  return (
    <div className={collections.container}>
      {products.map((el, index) => {
        return (
          <div className={collections.section} key={index}>
            <h4 className={collections.title}>{toUpperCase(el.category)}</h4>
            <div className={collections.cards}>
              {el.products.map((product, index) => (
                <ProductCard {...product} category={el.category} key={index} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Collections;
