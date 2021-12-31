import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Details from "./components/Details";

import { removeAllProductsAction } from "../../store/actions";
import thanks from "./thanks.module.scss";

function Thanks({ products, removeAll }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={thanks.container}>
      <Header removeAll={removeAll} />
      <Details products={products} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeAll: () => dispatch(removeAllProductsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);
