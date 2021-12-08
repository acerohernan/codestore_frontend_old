import React from "react";
import ReactDOM from "react-dom";

import Details from "./components/Details";
/* import ExtraInfo from "./components/ExtraInfo"; */
import Reviews from "./components/Reviews";
import LatestProducst from "../Home/components/LatestProducts";
import Cart from "../../components/Cart";

import product from "./product.module.css";

const image =
  "https://i.etsystatic.com/23646511/r/il/3be078/2560236514/il_794xN.2560236514_pix9.jpg";

function ProductPage() {
  return (
    <div className={product.container}>
      <div className={product.main}>
        <div className={product.imageContainer}>
          <img src={image} alt="product-img" className={product.image} />
          <div className={product.secondaryImgs}>
            <img src={image} alt="secondary" />
            <img src={image} alt="secondary" />
          </div>
        </div>
        <div className={product.sideBar}>
          <Details />
        </div>
      </div>
      <Reviews
        reviews={[
          {
            stars: "5/5",
            title: "Perfect",
            text: "Great fit and feel. They elevate lounging to the next level!",
            name: "Heidi C. | December, 2019",
          },
          {
            stars: "3.5/5",
            title: "So comfortable!",
            text: "I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.",
            name: "Heidi C. | December, 2019",
          },
          {
            stars: "4/5",
            title: "Comfy but thin",
            text: "Comfortable but kinda thin for a pant. I typically wear a 32/33 pant and had to size up to XL for these to not fit like a legging. Have been wearing pretty solid for a month of so and there's some pilling, but not a lot. Good price for OK product.",
            name: "Heidi C. | December, 2019",
          },
          {
            stars: "3.5/5",
            title: "So comfortable!",
            text: "I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.",
            name: "Heidi C. | December, 2019",
          },
        ]}
      />
      <LatestProducst />
    </div>
  );
}

export default ProductPage;
