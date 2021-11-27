import React from "react";

import hero from "./hero.module.css";

function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.image}></div>
      <div className={hero.textContainer}>
        <h1 className={hero.title}>The care you´ve always needed</h1>
        <span className={hero.subtitle}>A RANGE OF PRODUCTS FOR YOU</span>
        <button className={hero.button}>Shop now</button>
      </div>
    </div>
  );
}

export default Hero;
