import React from "react";
import { useNavigate } from "react-router-dom";

import check from "../../../../assets/check.png";

import header from "./header.module.css";

function Header({ removeAll }) {
  const navigate = useNavigate();

  const handleBackHome = () => {
    removeAll();
    navigate("/");
  };

  const handleContinueShipping = () => {
    removeAll();
    navigate("/collections");
  };

  return (
    <div className={header.container}>
      <img src={check} alt="check" className={header.check} />
      <h3>Thank you for your purchase!</h3>
      <span className={header.message}>You order completed successfully</span>
      <span className={header.orderNumber}>
        Here is your order number for reference: CMMRC-197605
      </span>
      <div className={header.buttons}>
        <button onClick={handleBackHome} className={header.buttonHome}>
          Go back home
        </button>
        <button
          onClick={handleContinueShipping}
          className={header.buttonShipping}
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
}

export default Header;
