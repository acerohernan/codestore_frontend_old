import React from "react";
import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

import cart from "./cart.module.css";

function Cart({ handleOpenCart }) {
  return (
    <>
      <section className={cart.container}>
        <div className={cart.header}>
          <h4 className={cart.title}>
            <BagIcon />
            YOUR CART
          </h4>
          <button className={cart.close} onClick={handleOpenCart}>
            X
          </button>
        </div>
        <div className={cart.body}></div>
        <div className={cart.footer}>
          <div className={cart.subtotal}>
            <ul className={cart.subtotalLeft}>
              <li>Subtotal</li>
              <li>Volume disocunt</li>
              <li>Shipping costs</li>
            </ul>
            <ul className={cart.subtotalRight}>
              <li>$563.34</li>
              <li>$563.34</li>
              <li>$11.34</li>
            </ul>
          </div>
          <div className={cart.total}>
            <span>Total</span>
            <div>
              <span>$575.33</span>
            </div>
          </div>
          <span className={cart.green}>Includes shipping costs</span>
          <button className={cart.checkout}>
            <CartIcon />
            CHECK OUT
          </button>
        </div>
      </section>
      <div className={cart.shadow}></div>
    </>
  );
}

export default Cart;
