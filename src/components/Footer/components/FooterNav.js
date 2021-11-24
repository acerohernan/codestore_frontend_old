import React from "react";
import { Link } from "react-router-dom";
import footer from "../footer.module.css";

function FooterNav() {
  return (
    <div className={footer.nav}>
      <Link to="/" className={footer.navLink}>
        About Us
      </Link>
      <Link to="/" className={footer.navLink}>
        Bulk Orders
      </Link>
      <Link to="/" className={footer.navLink}>
        Do Not Sell My Personal Information
      </Link>
      <Link to="/" className={footer.navLink}>
        Legal Info
      </Link>
      <Link to="/" className={footer.navLink}>
        Press
      </Link>
      <Link to="/" className={footer.navLink}>
        Privacy
      </Link>
      <Link to="/" className={footer.navLink}>
        Terms & Conditions
      </Link>
      <Link to="/" className={footer.navLink}>
        Selling
      </Link>
    </div>
  );
}

export default FooterNav;
