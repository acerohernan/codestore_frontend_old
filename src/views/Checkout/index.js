import React from "react";
import { connect } from "react-redux";

import Form from "./components/Form";
import Payment from "./components/Payment";
import Order from "./components/Order";

import checkout from "./checkout.module.css";

function Checkout({ orders }) {
  return (
    <form className={checkout.container}>
      <Form />
      <div>
        <Payment />
        <Order orders={orders} />
        <button className={checkout.button}>Make payment</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  orders: state.cart.products,
});

export default connect(mapStateToProps)(Checkout);
