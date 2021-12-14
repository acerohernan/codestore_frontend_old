import React, { useState, useEffect } from "react";

import details from "./details.module.css";

function Details({ products }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sumOfProducts = 0;
    products.map((product) => {
      sumOfProducts = product.quantity * product.price + sumOfProducts;
      return true;
    });
    setSubtotal(sumOfProducts);
  }, [products]);

  return (
    <div className={details.container}>
      <h3>Order details</h3>
      <div className={details.orderNumber}>
        <span>
          Receipt number: <br />
          CMMRC-197868
        </span>
        <button>Print receipt</button>
      </div>
      <div className={details.place}>
        <span>Ships to</span>
        <span>
          318 Homer Street <br /> Vancouver <br /> V6B22V2,CA
        </span>
      </div>
      {products.map(({ quantity, name, price, id }) => (
        <div className={details.product} key={id}>
          <span>
            {quantity} x {name}
          </span>
          <span>${price * quantity}.00</span>
        </div>
      ))}
      <div className={details.subtotal}>
        <span>Subtotal</span>
        <span>${subtotal}.00 USD</span>
      </div>
      <div className={details.shipping}>
        <span>Shipping </span>
        <span>$11.34 USD</span>
      </div>
      <div className={details.total}>
        <span>Order total</span>
        <span>${subtotal + +11.34}</span>
      </div>
    </div>
  );
}

export default Details;
