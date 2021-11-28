import React from "react";

import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import LatestProducts from "./components/LatestProducts";

import home from "./home.module.css";

function Home() {
  return (
    <div className={home.container}>
      <Hero />
      <Banner />
      <Categories />
      <LatestProducts />
    </div>
  );
}

export default Home;
