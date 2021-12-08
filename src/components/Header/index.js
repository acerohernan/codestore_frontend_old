import React from "react";
import header from "./header.module.css";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";

import logo from "../../assets/logo.png";

function Header({ handleCart, cartIsOpen }) {
  const handleOpenCart = () => {
    handleCart(!cartIsOpen);
  };
  return (
    <>
      <div className={header.container}>
        <MenuIcon className={header.menu} />
        <Link to="/">
          <img src={logo} alt="logo" className={header.image} />
        </Link>
        <div className={header.linksContainer}>
          <Link to="/" className={header.link}>
            HOME
          </Link>
          <Link to="/collections" className={header.link}>
            SHOP
          </Link>
          <Link to="/contact" className={header.link}>
            CONTACT
          </Link>
        </div>
        <div className={header.cartContainer}>
          <span className={header.currency}>USD</span>
          <button className={header.cart} onClick={handleOpenCart}>
            <BagIcon />
          </button>
        </div>
      </div>
      <div className={header.shadow}></div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartIsOpen: state.cart.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCart: (bool) => dispatch({ type: "HANDLE_CART", payload: bool }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
