import React from "react";

import categories from "./categories.module.css";

import imageSmall from "../../../../assets/categories.jpeg";
import imageBig from "../../../../assets/categories1.jpeg";

function Categories() {
  return (
    <div className={categories.container}>
      <h2 className={categories.title}>Categories</h2>
      <div className={categories.itemContainer}>
        <div className={categories.item}>
          <img
            alt="categories"
            className={categories.imageSmall}
            src={imageSmall}
          />
          <img
            alt="categories"
            className={categories.imageBig}
            src={imageBig}
          />
          <h4 className={categories.itemTitle}>Facial Products</h4>
        </div>
        <div className={categories.item}>
          <img
            alt="categories"
            className={categories.imageSmall}
            src={imageSmall}
          />
          <img
            alt="categories"
            className={categories.imageBig}
            src={imageBig}
          />
          <h4 className={categories.itemTitle}>Hair Products</h4>
        </div>
        <div className={categories.item}>
          <img
            alt="categories"
            className={categories.imageSmall}
            src={imageSmall}
          />
          <img
            alt="categories"
            className={categories.imageBig}
            src={imageBig}
          />
          <h4 className={categories.itemTitle}>Body Products</h4>
        </div>
      </div>
    </div>
  );
}

export default Categories;
