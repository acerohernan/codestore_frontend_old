import React from "react";

import details from "./details.module.css";
import { FiTruck as TruckIcon } from "react-icons/fi";

function Details({ name, price, description, stars }) {
  return (
    <div className={details.container}>
      <h4 className={details.name}>{name}</h4>
      <span className={details.stars}>{`${stars}/5✰`}</span>
      <p className={details.caracteristics}>{description}</p>
      <span className={details.price}>{`$${price}.99`}</span>
      <span className={details.shipping}>Plus Shipping</span>
      <span className={details.color}>Color</span>
      <div className={details.size}>
        <h4>Choose a size</h4>
        <div>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>2XL</span>
        </div>
      </div>
      <button className={details.button}>{`Add to cart | $${price}.99`}</button>
      <span className={details.time}>
        Shipping time: 3 days <TruckIcon />
      </span>
    </div>
  );
}

export default Details;
