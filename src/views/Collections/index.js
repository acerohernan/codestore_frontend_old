import React, { useEffect } from "react";

import ExploreSection from "../../components/ExploreSection";
import FollowSection from "../../components/FollowSection";
import ProductCard from "../../components/ProductCard";
import collections from "./collections.module.scss";

import { products } from "../../utils/products";
import toUpperCase from "../../utils/toUpperCase";

function Collections() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={collections.container}>
        {products.map((el, index) => {
          return (
            <div
              className={collections.section}
              key={index}
              id={`${el.category}`}
            >
              <h4 className={collections.title}>{toUpperCase(el.category)}</h4>
              <div className={collections.cards}>
                {el.products.map((product, index) => (
                  <ProductCard
                    {...product}
                    category={el.category}
                    key={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <ExploreSection />
      <FollowSection />
    </>
  );
}

export default Collections;
