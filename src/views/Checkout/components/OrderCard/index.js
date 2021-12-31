import React from "react";

import card from "./card.module.scss";

function OrderCard({ name, image, quantity, size, price }) {
  return (
    <div className={card.container}>
      <div className={card.main}>
        <img src={image} alt="product" className={card.image} />
        <div>
          <h4>{name}</h4>
          <span>Quantity: {quantity}</span>
          <span>Size: {size}</span>
        </div>
      </div>
      <span>${price}.00 USD</span>
    </div>
  );
}

export default OrderCard;
