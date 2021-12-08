import React from "react";

import categories from "./categories.module.css";

import imageSmall from "../../../../assets/categories.jpeg";
import imageBig from "../../../../assets/categories1.png";

import imageBig2 from "../../../../assets/categories2.png";
import imageBig3 from "../../../../assets/categories3.jpg";

function Categories() {
  return (
    <div className={categories.container}>
      <h2 className={categories.title}>Categories</h2>
      <div className={categories.itemContainer}>
        <div className={categories.item}>
          <img alt="categories" className={categories.image} src={imageBig} />
          <h4 className={categories.itemTitle}>Hoddies</h4>
        </div>
        <div className={categories.item}>
          <img alt="categories" className={categories.image} src={imageBig2} />
          <h4 className={categories.itemTitle}>T shirts</h4>
        </div>
        <div className={categories.item}>
          <img alt="categories" className={categories.image} src={imageBig3} />
          <h4 className={categories.itemTitle}>Mugs</h4>
        </div>
      </div>
    </div>
  );
}

export default Categories;
