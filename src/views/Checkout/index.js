import React from "react";

import Form from "./components/Form";
import Payment from "./components/Payment";

import checkout from "./checkout.module.css";

function Checkout() {
  return (
    <form className={checkout.container}>
      <Form />
      <Payment />
    </form>
  );
}

export default Checkout;
