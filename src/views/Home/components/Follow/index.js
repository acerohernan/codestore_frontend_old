import React from "react";
import Link from "../../../../components/LinkStyled";

import image from "../../../../assets/categories.jpeg";
import follow from "./follow.module.css";

function Follow() {
  return (
    <div className={follow.container}>
      <h4 className={follow.title}>Follow us on Instagram for more updates</h4>
      <Link text="Follow us" to="/" />
      <div className={follow.imageContainer}>
        <img src={image} alt="beauty" className={follow.image} />
        <img src={image} alt="beauty" className={follow.image} />
      </div>
    </div>
  );
}

export default Follow;
