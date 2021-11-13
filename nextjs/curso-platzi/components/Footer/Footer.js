import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.footer__social}>
        <li>
          <a className={style.link__social} href="http://">
            <i className="bx bxl-github" />
            GitHub
          </a>
        </li>
        <li>
          <a className={style.link__social} href="http://">
            <i className="bx bxl-instagram-alt" />
            Instagram
          </a>
        </li>
        <li>
          <a className={style.link__social} href="http://">
            <i className="bx bxl-twitter" />
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
