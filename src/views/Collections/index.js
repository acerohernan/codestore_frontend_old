import React, { useEffect } from "react";

import ExploreSection from "../../components/ExploreSection";
import FollowSection from "../../components/FollowSection";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

import collections from "./collections.module.scss";
import toUpperCase from "../../utils/toUpperCase";
import useFetch from "../../hooks/useFetch";

function Collections() {
  const [products, loading] = useFetch(
    "https://code-store-backend.herokuapp.com/api/collections"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className={collections.container}>
          {products?.map((el, index) => {
            return (
              <div
                className={collections.section}
                key={index}
                id={`${el.category}`}
              >
                <h4 className={collections.title}>
                  {toUpperCase(el.category)}
                </h4>
                <div className={collections.cards}>
                  {el.products.map(
                    (product, index) =>
                      index < 3 && (
                        <ProductCard
                          {...product}
                          id={product._id}
                          category={el.category}
                          key={index}
                        />
                      )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ExploreSection />
      <FollowSection />
    </>
  );
}

export default Collections;
