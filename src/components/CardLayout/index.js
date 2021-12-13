import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import Header from "../Header";
import Explore from "../../views/Home/components/Explore";
import Follow from "../../views/Home/components/Follow";
import Footer from "../Footer";
import Copyright from "../Copyright";
import Cart from "../Cart";

import { handleCartAction } from "../../store/actions";

function CardLayout({ children, cartIsOpen, closeCart }) {
  return (
    <>
      <Header />
      {children}
      <Explore />
      <Follow />
      <Footer />
      <Copyright />
      {cartIsOpen &&
        ReactDOM.createPortal(
          <Cart closeCart={closeCart} />,
          document.getElementById("modal")
        )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    cartIsOpen: state.cart.isOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeCart: () => dispatch(handleCartAction(false)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardLayout);
