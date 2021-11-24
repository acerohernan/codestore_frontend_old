import React from "react";
import { MdPlayArrow as Arrow } from "react-icons/md";
import { Link } from "react-router-dom";

import footer from "../footer.module.css";

function FooterCard({ children, title, msg, msgBold }) {
  return (
    <div className={footer.card}>
      {children}
      <h3 className={footer.cardTitle}>{title}</h3>
      <span>
        {msg}{" "}
        <i>
          <b>{msgBold}</b>
        </i>
      </span>
      <Link to="" className={footer.cardLink}>
        Read more
        <Arrow />
      </Link>
    </div>
  );
}

export default FooterCard;
