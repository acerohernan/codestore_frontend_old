import React from "react";
import { Link } from "react-router-dom";

import copyright from "./copyright.module.css";

function Copyright() {
  return (
    <div className={copyright.container}>
      <Link to="/" className={copyright.link}>
        View in Github
      </Link>
      <Link to="/" className={copyright.link}>
        © 2021 Hernan Acero.
      </Link>
    </div>
  );
}

export default Copyright;
