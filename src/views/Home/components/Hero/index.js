import React from "react";

import hero from "./hero.module.css";

function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.image}></div>
      <div className={hero.textContainer}>
        <h1 className={hero.title}>WE ARE CODERS LIKE YOU.</h1>
        <span className={hero.subtitle}>See all the products</span>
        <button className={hero.button}>Shop now</button>
      </div>
    </div>
  );
}

export default Hero;
