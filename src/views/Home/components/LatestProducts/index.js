import React from "react";

import LinkStyled from "../../../../components/LinkStyled";
import latest from "./latest.module.css";

function LatestProducts() {
  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/">See more products</LinkStyled>
      <div className={latest.cards}>
        <div className={latest.card}>
          <img src="" alt="latest card" />
          <span className={latest.cardTitle}>Complexion Cream</span>
          <p className={latest.cardText}>
            Anti-aging complexion cream for medium to dry skin. Nourish your
            face with a natural vitamin burst for that perfectly balanced glow.
          </p>
          <span className={latest.cardPrice}>$32.00</span>
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
