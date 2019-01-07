import * as React from "react";
import "./Footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__phone">
          Телефон доставки:{" "}
          <a className="footer__phone__link" href="tel:+79684554444">
            +7 968 455 44 44
          </a>
        </div>
      </footer>
    );
  }
}
