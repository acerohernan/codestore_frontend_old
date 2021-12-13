import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

import Card from "./components/Card";

import cart from "./cart.module.css";
import {
  removeProductAction,
  reduceQuantityAction,
  addProductAction,
} from "../../store/actions";

function Cart({
  closeCart,
  removeItem,
  reduceQuantity,
  increaseQuantity,
  products,
}) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sumOfPrices = 0;
    products.map((product) => {
      sumOfPrices = product.quantity * product.price + sumOfPrices;
      return true;
    });
    setSubtotal(sumOfPrices);
  }, [products]);

  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      <section className={cart.container}>
        <div className={cart.header}>
          <h4 className={cart.title}>
            <BagIcon />
            YOUR CART
          </h4>
          <button className={cart.close} onClick={closeCart}>
            X
          </button>
        </div>
        <div className={cart.body}>
          {products.length === 0 ? (
            <span className={cart.noProducts}>No products to see!</span>
          ) : (
            products.map((product) => (
              <Card
                {...product}
                key={product.id}
                removeItem={removeItem}
                reduceQuantity={reduceQuantity}
                increaseQuantity={increaseQuantity}
              />
            ))
          )}
        </div>
        <div className={cart.footer}>
          <div className={cart.subtotal}>
            <ul className={cart.subtotalLeft}>
              <li>Subtotal</li>
              <li>Shipping costs</li>
            </ul>
            <ul className={cart.subtotalRight}>
              <li>${subtotal}.00</li>
              <li>$11.34</li>
            </ul>
          </div>
          <div className={cart.total}>
            <span>Total</span>
            <div>
              <span>${subtotal + 11.34}</span>
            </div>
          </div>
          <span className={cart.green}>Includes shipping costs</span>
          <button className={cart.checkout} onClick={handleCheckout}>
            <CartIcon />
            CHECK OUT
          </button>
        </div>
      </section>
      <div className={cart.shadow}></div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeProductAction(item)),
  reduceQuantity: (item) => dispatch(reduceQuantityAction(item)),
  increaseQuantity: (item) => dispatch(addProductAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
