import React from "react";
import header from "./header.module.scss";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";

import logo from "../../assets/logo.png";
import { handleCartAction } from "../../store/actions";

function Header({ handleCart, cartIsOpen, productsInCart }) {
  const handleOpenCart = () => {
    handleCart(!cartIsOpen);
  };
  return (
    <>
      <div className={header.container}>
        <MenuIcon className={header.menu} />
        <Link to="/" className={header.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={header.linksContainer}>
          <Link to="/" className={header.link}>
            HOME
          </Link>
          <Link to="/collections" className={header.link}>
            SHOP
          </Link>
          <a
            href="https://acerohernan.github.io/portfolio/"
            target="_blank"
            className={header.link}
            rel="noreferrer"
          >
            CONTACT
          </a>
        </div>
        <div className={header.cartContainer}>
          <span className={header.currency}>USD</span>
          <button className={header.cart} onClick={handleOpenCart}>
            <BagIcon />
            {productsInCart.length > 0 && <span>{productsInCart.length}</span>}
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
    productsInCart: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCart: (bool) => dispatch(handleCartAction(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
