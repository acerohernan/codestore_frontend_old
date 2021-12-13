import React from "react";

import Form from "./components/Form";

import checkout from "./checkout.module.css";

function Checkout() {
  return (
    <form className={checkout.container}>
      <Form />
    </form>
  );
}

export default Checkout;
