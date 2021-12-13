import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Details from "./components/Details";
import Reviews from "./components/Reviews";
import LatestProducst from "../Home/components/LatestProducts";

import product from "./product.module.css";
import { products } from "../../utils/products";
import { reviews } from "../../utils/reviews";
import { addProductAction, handleCartAction } from "../../store/actions";

function ProductPage({ addToCart, openCart }) {
  const [item, setItem] = useState({});
  const [modalSizeAppear, setModalSizeAppear] = useState(false);

  const { category, id } = useParams();

  useEffect(() => {
    const listOfProducts = products.find((el) => el.category === category);
    const item = listOfProducts.products.find((product) => product.id === id);
    setItem(item);
    window.scroll(0, 0);
  }, [id, category]);

  const handleAddToCart = () => {
    if (!item.size) {
      setModalSizeAppear(true);
      return false;
    }
    setModalSizeAppear(false);
    addToCart({
      ...item,
      quantity: 1,
    });
    openCart();
  };

  const handleAddSize = (size) => {
    setItem({
      ...item,
      size,
    });
  };

  return (
    <div className={product.container}>
      <div className={product.main}>
        <div className={product.imageContainer}>
          <img src={item.image} alt="product-img" className={product.image} />
          <div className={product.secondaryImgs}>
            <img src={item.image} alt="secondary" />
            <img src={item.image} alt="secondary" />
          </div>
        </div>
        <div className={product.sideBar}>
          <Details
            {...item}
            handleAddToCart={handleAddToCart}
            addSize={handleAddSize}
            modalSize={modalSizeAppear}
          />
        </div>
      </div>
      <Reviews reviews={reviews} />
      <LatestProducst />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(handleCartAction(true)),
  addToCart: (item) => dispatch(addProductAction(item)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
