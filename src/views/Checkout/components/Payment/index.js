import React from "react";

import payment from "./payment.module.css";

function Payment() {
  return (
    <div className={payment.container}>
      <h2 className={payment.title}>Payment Detail</h2>
      <div className={payment.card}>
        <h3 className={payment.cardTitle}>Credit/ debit card</h3>
        <div className={payment.cardDetails}>
          <div className={payment.cardNumber}>
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" name="cardNumber" id="cardNumber" />
          </div>
          <div>
            <label htmlFor="cvc">CVC(CVV)</label>
            <input type="text" name="cvc" id="cvc" />
          </div>
          <div>
            <label htmlFor="expMonth">Exp. Month</label>
            <input type="text" name="expMonth" id="expMonth" />
          </div>
          <div>
            <label htmlFor="expYear">Exp. Year</label>
            <input type="text" name="expYear" id="expYear" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
