import * as React from "react";
import { FaMobile, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <IconContext.Provider value={{ className: "footer-mobile-icon" }}>
          <div className="footer__phone">
            <FaMobile />
            Телефон доставки:{" "}
            <a className="footer__phone__link" href="tel:+79684554444">
              +7 968 455 44 44
            </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "footer-instagram-icon" }}>
          <div className="footer__socials">
            <div className="footer__socials__text">Аккаунты в соц. сетях:</div>
            <a
              className="footer__socials__link"
              href="https://www.instagram.com/dostavka_kalyana_/"
            >
              <FaInstagram />
            </a>
          </div>
        </IconContext.Provider>
      </footer>
    );
  }
}
