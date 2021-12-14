import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Details from "./components/Details";

import thanks from "./thanks.module.css";

function Thanks({ products }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={thanks.container}>
      <Header />
      <Details products={products} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

export default connect(mapStateToProps)(Thanks);
