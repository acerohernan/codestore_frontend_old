import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook as FacebookIcon,
  AiOutlineInstagram as InstagramIcon,
  AiOutlineTwitter as TwitterIcon,
  AiFillYoutube as YoutubeIcon,
} from "react-icons/ai";

import footer from "../footer.module.css";

function FooterSocialMedia() {
  return (
    <div className={footer.social}>
      <Link to="/" className={footer.socialLink}>
        <FacebookIcon className={footer.socialIcon} />
      </Link>
      <Link to="/" className={footer.socialLink}>
        <InstagramIcon className={footer.socialIcon} />
      </Link>
      <Link to="/" className={footer.socialLink}>
        <TwitterIcon className={footer.socialIcon} />
      </Link>
      <Link to="/" className={footer.socialLink}>
        <YoutubeIcon className={footer.socialIcon} />
      </Link>
    </div>
  );
}

export default FooterSocialMedia;
