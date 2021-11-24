import React from "react";

import hero from "./hero.module.css";

function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.image}></div>
      <div className={hero.textContainer}>
        <h1 className={hero.title}>Our big sale.</h1>
        <span className={hero.subtitle}>
          Early Black Friday has arrived. Get up to 50% off our entire
          colecction
        </span>
        <button className={hero.button}>See the deals.</button>
      </div>
    </div>
  );
}

export default Hero;
