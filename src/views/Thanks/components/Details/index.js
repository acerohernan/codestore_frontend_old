import React from "react";

import details from "./details.module.css";

function Details() {
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
      <div className={details.product}>
        <span>1 x Lip Fantastic</span>
        <span>$24.00</span>
      </div>
      <div className={details.product}>
        <span>1 x Lip Fantastic</span>
        <span>$24.00</span>
      </div>
      <div className={details.product}>
        <span>1 x Lip Fantastic</span>
        <span>$24.00</span>
      </div>
      <div className={details.subtotal}>
        <span>Subtotal</span>
        <span>$24.00 USD</span>
      </div>
      <div className={details.shipping}>
        <span>Shipping </span>
        <span>$11.34 USD</span>
      </div>
      <div className={details.total}>
        <span>Order total</span>
        <span>$29.00</span>
      </div>
    </div>
  );
}

export default Details;
