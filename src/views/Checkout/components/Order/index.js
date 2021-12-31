import React from "react";

import OrderCard from "../OrderCard";

import useSubtotal from "../../../../hooks/useSubtotal";
import order from "./order.module.scss";

function Order({ orders }) {
  const subtotal = useSubtotal(orders);
  return (
    <div className={order.container}>
      <h3 className={order.title}>You order</h3>
      <div className={order.products}>
        {orders.map((order) => (
          <OrderCard {...order} key={order.id} />
        ))}
      </div>
      <div className={order.cupon}>
        <input type="text" placeholder="Gift card or discount code" />
        <button>Apply</button>
      </div>
      <table className={order.subtotal}>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subtotal}.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>$11.34</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>$00.00</td>
          </tr>
        </tbody>
      </table>
      <div className={order.total}>
        <span>Total amount</span>
        <span>${subtotal + 11.34} USD</span>
      </div>
    </div>
  );
}

export default Order;
