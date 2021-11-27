import React from "react";
import { BiRightArrowAlt as Arrow } from "react-icons/bi";
import { Link } from "react-router-dom";

import link from "./link.module.css";

function LinkStyled({ child, to }) {
  return (
    <Link className={link.container} to={to}>
      {child}
      <Arrow className={link.icon} />
    </Link>
  );
}

export default LinkStyled;
