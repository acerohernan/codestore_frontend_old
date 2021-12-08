import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt as Arrow } from "react-icons/bi";
import banner from "./banner.module.css";

function Banner() {
  return (
    <div className={banner.container}>
      <p className={banner.text}>
        MOISTURE IS THE ESSENCE OF WETNESS, AND WETNESS IS THE ESSENCE OF
        BEAUTY.
      </p>
      <Link to="/collections" className={banner.link}>
        Find out more
        <Arrow />
      </Link>
    </div>
  );
}

export default Banner;
