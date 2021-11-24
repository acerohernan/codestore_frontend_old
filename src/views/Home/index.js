import React from "react";

import Hero from "./components/Hero";

import home from "./home.module.css";

function Home() {
  return (
    <div className={home.container}>
      <Hero />
    </div>
  );
}

export default Home;
