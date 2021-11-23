import React from "react";
import { BiHappy as HappyIcon } from "react-icons/bi";
import { AiOutlineLock as LockIcon } from "react-icons/ai";
import { FiTruck as TruckIcon } from "react-icons/fi";
import { MdPlayArrow as Arrow } from "react-icons/md";
import { Link } from "react-router-dom";

import footer from "./footer.module.css";

function Footer() {
  const FooterCard = ({ children }) => (
    <div className={footer.card}>
      {children}
      <h3 className={footer.cardTitle}>Satisfaccion guaranteed</h3>
      <span>
        Easy returns within 30 days, <b>no questions asked</b>
      </span>
      <Link to="" className={footer.cardLink}>
        Read more
        <Arrow />
      </Link>
    </div>
  );

  return (
    <div className={footer.container}>
      <div className={footer.cards}>
        <FooterCard>
          <HappyIcon className={footer.icon} />
        </FooterCard>
        <FooterCard>
          <LockIcon className={footer.icon} />
        </FooterCard>
        <FooterCard>
          <TruckIcon className={footer.icon} />
        </FooterCard>
      </div>
    </div>
  );
}

export default Footer;
