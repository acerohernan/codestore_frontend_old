import React from "react";

import form from "./form.module.scss";

function Form() {
  return (
    <section className={form.container}>
      <h1 className={form.sectionTitle}>Customer</h1>
      <div className={form.customer}>
        <div>
          <label htmlFor="firstname">First name*</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last name*</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div>
          <label htmlFor="telephone">Telephone</label>
          <input type="text" name="telephone" id="telephone" />
        </div>
        <div>
          <label htmlFor="email">Email Address*</label>
          <input type="email" name="email" id="email" />
        </div>
      </div>
      <h1 className={form.sectionTitle}>Shipping Address</h1>
      <div className={form.shiping}>
        <label htmlFor="fullname">Full name*</label>
        <input type="text" name="fullname" id="fullname" />
        <div className={form.address}>
          <div>
            <label htmlFor="country">Country*</label>
            <input type="text" name="country" id="country" />
          </div>
          <div>
            <label htmlFor="city">City*</label>
            <input type="text" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="address1">Address line 1*</label>
            <input type="text" name="address1" id="address1" />
          </div>
          <div>
            <label htmlFor="address2">Address line 2 (optional)</label>
            <input type="text" name="address2" id="address2" />
          </div>
          <div>
            <label htmlFor="state">State/province/regiony*</label>
            <input type="text" name="state" id="state" />
          </div>
          <div>
            <label htmlFor="postalcode">Postal code/zip code*</label>
            <input type="text" name="postalcode" id="postalcode" />
          </div>
        </div>
        <label htmlFor="method">Shipping method*</label>
        <input type="text" name="method" id="method" />
        <div className={form.check}>
          <input type="checkbox" name="subscribe" id="subscribe" />
          <label htmlFor="subscribe">
            Receive our news, restocking, good plans and news in your mailbox!
            Rest assured, you will not be flooded, we only send one newsletter
            per month approximately 🙂.
          </label>
        </div>
        <label htmlFor="notes">Order notes (optional)</label>
        <textarea type="text" className={form.notes} name="notes" id="notes" />
      </div>
    </section>
  );
}

export default Form;
