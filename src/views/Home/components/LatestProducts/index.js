import React from "react";

import LinkStyled from "../../../../components/LinkStyled";

import latest from "./latest.module.css";
import image from "../../../../assets/latest.jpg";

function LatestProducts() {
  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/" text="See more products" />
      <div className={latest.cards}>
        {[1, 2, 3, 4].map((el, index) => (
          <div className={latest.card} key={index}>
            <img src={image} alt="latest card" className={latest.cardImage} />
            <span className={latest.cardTitle}>Complexion Cream</span>
            <p className={latest.cardText}>
              Anti-aging complexion cream for medium to dry skin. Nourish your
              face with a natural vitamin burst for that perfectly balanced
              glow.
            </p>
            <span className={latest.cardPrice}>$32.00</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
