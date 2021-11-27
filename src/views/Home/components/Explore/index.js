import React from "react";
import Link from "../../../../components/LinkStyled";

import explore from "./explore.module.css";
import image from "../../../../assets/explore.jpeg";

function Explore() {
  return (
    <div className={explore.container}>
      <div className={explore.content}>
        <img src={image} alt="main" className={explore.image} />
        <div className={explore.textContainer}>
          <h4 className={explore.title}>A new shopping experience</h4>
          <Link to="/" text="Explore products" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
