import React from "react";

import style from "./reviews.module.css";

function Reviews({ reviews }) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>4.3 stars from 10 reviews</h3>
      <div className={style.cards}>
        {reviews.map(({ stars, title, text, name }, index) => (
          <div className={style.card} key={index}>
            <span className={style.cardStars}>{stars}</span>
            <h4 className={style.cardTitle}>{title}</h4>
            <p className={style.cardText}>{text}</p>
            <span className={style.cardName}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
