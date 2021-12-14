import React from "react";

import src from "../../../../assets/categories1.png";
import card from "./card.module.css";

function OrderCard() {
  return (
    <div className={card.container}>
      <div className={card.main}>
        <img src={src} alt="product" className={card.image} />
        <div>
          <h4>Lip Fantastic</h4>
          <span>Quantity: 1</span>
          <span>Size: 30ml</span>
        </div>
      </div>
      <span>$24.00 USD</span>
    </div>
  );
}

export default OrderCard;
