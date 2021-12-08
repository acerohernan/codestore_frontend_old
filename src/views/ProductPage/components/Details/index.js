import React from "react";

import details from "./details.module.css";

function Details() {
  return (
    <div className={details.container}>
      <h4 className={details.name}>React Hoddie</h4>
      <span className={details.stars}>4.5/5✰</span>
      <p className={details.caracteristics}>
        A hoddie made of wool with the logo of React.
      </p>
      <span className={details.size}>Size 100ml 500ml</span>
      <button className={details.button}>Add to cart | $32</button>
    </div>
  );
}

export default Details;
