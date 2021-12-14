import React from "react";

import Form from "./components/Form";
import Order from "./components/Order";

import checkout from "./checkout.module.css";

function Checkout() {
  return (
    <form className={checkout.container}>
      <Form />
      <Order />
    </form>
  );
}

export default Checkout;
