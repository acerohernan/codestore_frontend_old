import React from "react";

import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import LatestProducts from "./components/LatestProducts";
import Explore from "./components/Explore";
import Follow from "./components/Follow";

import home from "./home.module.css";

function Home() {
  return (
    <div className={home.container}>
      <Hero />
      <Banner />
      <Categories />
      <LatestProducts />
      <Explore />
      <Follow />
    </div>
  );
}

export default Home;
