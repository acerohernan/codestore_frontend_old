import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NoProducts from "./components/NoProducts";
import Card from "./components/Card";

import useSubtotal from "../../hooks/useSubtotal";
import cart from "./cart.module.scss";
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
  const subtotal = useSubtotal(products);
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      <section className={cart.container}>
        <Header closeCart={closeCart} />
        {products.length > 0 && (
          <>
            <div className={cart.body}>
              {products.map((product) => (
                <Card
                  {...product}
                  key={product.id}
                  removeItem={removeItem}
                  reduceQuantity={reduceQuantity}
                  increaseQuantity={increaseQuantity}
                />
              ))}
            </div>
            <Footer handleCheckout={handleCheckout} subtotal={subtotal} />
          </>
        )}
        {products.length === 0 && <NoProducts closeCart={closeCart} />}
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
