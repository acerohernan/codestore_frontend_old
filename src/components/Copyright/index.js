import React from "react";
import { Link } from "react-router-dom";

import copyright from "./copyright.module.scss";

function Copyright() {
  return (
    <div className={copyright.container}>
      <div className={copyright.linksContainer}>
        <Link to="/" className={copyright.link}>
          View in Github
        </Link>
        <Link to="/" className={copyright.link}>
          © 2021 Hernan Acero.
        </Link>
      </div>
    </div>
  );
}

export default Copyright;
