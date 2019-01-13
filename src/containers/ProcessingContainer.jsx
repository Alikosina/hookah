import * as React from "react";
import {
  FaShippingFast,
  FaShoppingCart,
  FaFlask,
  FaBoxOpen
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./ProcessingContainer.scss";

export default class ProcessingContainer extends React.Component {
  render() {
    return (
      <div className="processing">
        <h2 className="processing__title">Доставка</h2>
        <div className="processing__content">
          <IconContext.Provider
            value={{ className: "processing__content__item__icon__icon" }}
          >
            <div className="processing__content__item">
              <div className="processing__content__item__title">Заказ</div>
              <div className="processing__content__item__icon">
                <FaShoppingCart size={56} />
              </div>
              <div className="processing__content__item__text">
                Выберите любой кальян, чашу и табак, или обратитесь к нам за
                советом. Заказ вы можете сделать как по телефону +7 (968) 455 44
                44 , так и через форму заказа на сайте в любое время суток.
              </div>
            </div>
            <div className="processing__content__item">
              <div className="processing__content__item__title">
                Приготовление
              </div>
              <div className="processing__content__item__icon">
                <FaFlask size={56} />
              </div>
              <div className="processing__content__item__text">
                Наши мастера делают кальян по вашим желаниям, чтобы к указанному
                времени доставить кальян на дом в лучшем виде.
              </div>
            </div>
            <div className="processing__content__item">
              <div className="processing__content__item__title">Доставка</div>
              <div className="processing__content__item__icon">
                <FaShippingFast size={56} />
              </div>
              <div className="processing__content__item__text">
                Мы передаем вам весь набор для удовольствия: кальян, готовый
                фрукт, плиту, щипцы, угли, инструкцию и мундштуки.
              </div>
            </div>
            <div className="processing__content__item">
              <div className="processing__content__item__title">
                Возвращение
              </div>

              <div className="processing__content__item__icon">
                <FaBoxOpen size={56} />
              </div>
              <div className="processing__content__item__text">
                Когда вы закончите наслаждаться кальяном, подождите, когда он
                остынет, и слейте воду. Кальян мыть не надо – просто положите
                его в коробку, и мы заберем его в удобное для вас время.
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}
