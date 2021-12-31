import React from "react";
import { BiRightArrowAlt as Arrow } from "react-icons/bi";
import { Link } from "react-router-dom";

import link from "./link.module.scss";

function LinkStyled({ text, to }) {
  return (
    <Link className={link.container} to={to}>
      <span>{text}</span>
      <Arrow className={link.icon} />
    </Link>
  );
}

export default LinkStyled;
