import * as React from "react";
import animateScrollTo from "animated-scroll-to";
import { FaAlignJustify } from "react-icons/fa";
import "./HeaderMenu.scss";

export default class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  changeExpandedState = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <div className="header-menu">
          <div className="header-menu__item">
            <div className="header-menu__logo" />
          </div>
          <div className="header-menu__item">
            <nav className="header-menu__nav">
              <ul className="header-menu__nav__list">
                <li className="header-menu__nav__list__item">
                  <a
                    onClick={e => {
                      e.preventDefault();
                      animateScrollTo(document.querySelector(".processing"));
                    }}
                    className="header-menu__nav__list__item__link"
                    href="#"
                  >
                    Доставка на дом
                  </a>
                </li>
                <li className="header-menu__nav__list__item">
                  <a
                    onClick={e => {
                      e.preventDefault();
                      animateScrollTo(
                        document.querySelector(".hookah-calculator-title")
                      );
                    }}
                    className="header-menu__nav__list__item__link"
                    href="#"
                  >
                    Меню
                  </a>
                </li>
                <li className="header-menu__nav__list__item">
                  <a className="header-menu__nav__list__item__link" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-menu__nav-mobile">
              <div
                onClick={this.changeExpandedState}
                className="header-menu__nav-mobile__title"
              >
                <FaAlignJustify />{" "}
                <span className="header-menu__nav-mobile__title__text">
                  Навигация
                </span>
              </div>
            </div>
          </div>
          <div className="header-menu__item">
            <div className="header-menu__phone">
              <a className="footer__phone__link" href="tel:+79684554444">
                +7 968 455 44 44
              </a>
            </div>
          </div>
        </div>
        {isOpen && (
          <nav className="header-menu__nav-mobile__expand">
            <ul className="header-menu__nav-mobile__expand__list">
              <li className="header-menu__nav-mobile__expand__list__item">
                <a
                  onClick={e => {
                    e.preventDefault();
                    animateScrollTo(document.querySelector(".processing"));
                  }}
                  href="#"
                  className="header-menu__nav-mobile__expand__list__item__link"
                >
                  Доставка на дом
                </a>
              </li>
              <li className="header-menu__nav-mobile__expand__list__item">
                <a
                  onClick={e => {
                    e.preventDefault();
                    animateScrollTo(
                      document.querySelector(".hookah-calculator-title")
                    );
                  }}
                  href="#"
                  className="header-menu__nav-mobile__expand__list__item__link"
                >
                  Меню
                </a>
              </li>
              <li className="header-menu__nav-mobile__expand__list__item">
                <a
                  href="#"
                  className="header-menu__nav-mobile__expand__list__item__link"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        )}
      </React.Fragment>
    );
  }
}
