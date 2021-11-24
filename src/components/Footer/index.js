import React from "react";
import { BiHappy as HappyIcon } from "react-icons/bi";
import { AiOutlineLock as LockIcon } from "react-icons/ai";
import { FiTruck as TruckIcon } from "react-icons/fi";

import FooterCard from "./components/FooterCard";
import FooterNewsletter from "./components/FooterNewsletter";
import FooterNav from "./components/FooterNav";
import FooterSocialMedia from "./components/FooterSocialMedia";

import footer from "./footer.module.css";

function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.cards}>
        <FooterCard
          title={"Satisfaccion guaranteed"}
          msg={"Easy retunrs within 30 days,"}
          msgBold={"no question asked"}
        >
          <HappyIcon className={footer.icon} />
        </FooterCard>
        <FooterCard
          title={"All secure payment methods"}
          msg={"Easy retunrs within 30 days,"}
          msgBold={"no question asked"}
        >
          <LockIcon className={footer.icon} />
        </FooterCard>
        <FooterCard
          title={"Worldwide delivery"}
          msg={"Easy retunrs within 30 days,"}
          msgBold={"no question asked"}
        >
          <TruckIcon className={footer.icon} />
        </FooterCard>
      </div>
      <FooterNewsletter />
      <FooterNav />
      <FooterSocialMedia />
    </div>
  );
}

export default Footer;
