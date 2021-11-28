import React from "react";

import details from "./details.module.css";

function Details() {
  return (
    <div className={details.container}>
      <span className={details.stars}>4.5/5</span>
      <h4 className={details.name}>Complexion Cream</h4>
      <p className={details.caracteristics}>
        Anti-aging complexion cream for medium to dry skin. Nourish your face
        with a natural vitamin burst for that perfectly balanced glow.
      </p>
      <span className={details.size}>Size 100ml 500ml</span>
      <button className={details.button}>Add to cart | $32</button>
    </div>
  );
}

export default Details;
