import React from "react";

import OrderCard from "../OrderCard";

import order from "./order.module.css";

function Order({ orders }) {
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
            <td>$62.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$0.00</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>Saved $31.00</td>
          </tr>
        </tbody>
      </table>
      <div className={order.total}>
        <span>Total amount</span>
        <span>$310.00 USD</span>
      </div>
    </div>
  );
}

export default Order;
