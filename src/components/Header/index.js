import React from "react";
import styles from "./header.module.css";

import { Link } from "react-router-dom";

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";

import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className={styles.container}>
      <MenuIcon className={styles.menu} />
      <img src={logo} alt="logo" className={styles.image} />
      <div className={styles.linksContainer}>
        <Link to="/" className={styles.link}>
          SHOP
        </Link>
        <Link to="/about" className={styles.link}>
          ABOUT
        </Link>
        <Link to="/" className={styles.link}>
          CONTACT
        </Link>
      </div>
      <div className={styles.cartContainer}>
        <span className={styles.currency}>USD</span>
        <BagIcon className={styles.bag} />
      </div>
    </div>
  );
}

export default Header;
