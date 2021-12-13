import React from "react";
import { BsTrash as TrashIcon } from "react-icons/bs";

import card from "./card.module.css";

function Card({
  id,
  name,
  image,
  price,
  quantity,
  size,
  removeItem,
  reduceQuantity,
  increaseQuantity,
}) {
  let item = {
    id,
    name,
    image,
    price,
    quantity,
    size,
  };

  const handleRemoveItem = () => {
    removeItem(item);
  };

  const handleReduceQuantity = () => {
    if (item.quantity === 1) return removeItem(item);
    reduceQuantity(item);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(item);
  };

  return (
    <div className={card.container}>
      <div className={card.main}>
        <img src={image} alt="product" className={card.image} />
        <div className={card.details}>
          <h3 className={card.title}>{name}</h3>
          <span className={card.creator}>hernan acero</span>
          <button className={card.trashButton} onClick={handleRemoveItem}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className={card.table}>
        <div className={card.row}>
          <span className={card.header}>Size</span>
          <span>{size}</span>
        </div>
        <div className={card.row}>
          <span className={card.header}>Quantity</span>
          <div className={card.quantityBtns}>
            <button className={card.minusButton} onClick={handleReduceQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button
              className={card.plusButton}
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        <div className={card.row}>
          <span className={card.header}>Price</span>
          <span>{`$${price}.00`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
