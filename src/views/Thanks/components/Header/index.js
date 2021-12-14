import React from "react";

import check from "../../../../assets/check.png";

import header from "./header.module.css";

function Header() {
  return (
    <div className={header.container}>
      <img src={check} alt="check" className={header.check} />
      <h3>Thank you for your purchase!</h3>
      <span>Ypou order completed successfully</span>
      <span className={header.orderNumber}>
        Here is your order number for reference: CMMRC-197605
      </span>
      <div className={header.buttons}>
        <button className={header.buttonHome}>Go back home</button>
        <button className={header.buttonShipping}>Continue shopping</button>
      </div>
    </div>
  );
}

export default Header;
