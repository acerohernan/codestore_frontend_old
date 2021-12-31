import React from "react";

import { AiOutlinePlus as PlusIcon } from "react-icons/ai";
import extra from "./extra.module.scss";

function ExtraInfo({ title, text }) {
  return (
    <div className={extra.container}>
      <div className={extra.titleContainer}>
        <h4 className={extra.title}>{title}</h4>
        <PlusIcon className={extra.icon} />
      </div>
      <p className={extra.text}>{text}</p>
    </div>
  );
}

export default ExtraInfo;
