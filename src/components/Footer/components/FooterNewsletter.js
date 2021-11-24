import React from "react";
import footer from "../footer.module.css";

const FooterNewsletter = () => {
  return (
    <div className={footer.newsletter}>
      <h3>Subscribe to our newsletter</h3>
      <div className={footer.newsletterInputContainer}>
        <input
          className={footer.newsletterInput}
          placeholder="Your e-mail address"
          type="email"
          name="email"
        />
        <button className={footer.newsletterButton}>Subscribe</button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
