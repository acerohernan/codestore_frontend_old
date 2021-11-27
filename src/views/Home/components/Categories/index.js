import React from "react";

import categories from "./categories.module.css";

function Categories() {
  return (
    <div className={categories.container}>
      <h2 className={categories.title}>Categories</h2>
      <div className={categories.itemContainer}>
        <div className={categories.item}>
          <div className={categories.image}></div>
          <h4 className={categories.itemTitle}>Facial Products</h4>
        </div>
        <div className={categories.item}>
          <div className={categories.image}></div>
          <h4 className={categories.itemTitle}>Hair Products</h4>
        </div>
        <div className={categories.item}>
          <div className={categories.image}></div>
          <h4 className={categories.itemTitle}>Body Products</h4>
        </div>
      </div>
    </div>
  );
}

export default Categories;
