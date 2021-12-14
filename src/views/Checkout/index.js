import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Form from "./components/Form";
import Payment from "./components/Payment";
import Order from "./components/Order";

import checkout from "./checkout.module.css";

function Checkout({ orders }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/checkout/confirm");
  };

  return (
    <form className={checkout.container}>
      <Form />
      <div>
        <Payment />
        <Order orders={orders} />
        <button className={checkout.button} onClick={handlePayment}>
          Make payment
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  orders: state.cart.products,
});

export default connect(mapStateToProps)(Checkout);
