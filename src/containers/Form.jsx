import * as React from "react";
import { connect } from "react-redux";
import "./Form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      name: "",
      active: false,
      succeed: false,
      failed: false
    };
  }
  onPhoneChange = e => {
    const phone = e.target.value;
    this.setState({ phone });
  };

  onNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  onSubmit = e => {
    e.preventDefault();
    const { phone, name } = this.state;
    const { products } = this.props;
    fetch("http://185.178.47.62:8081/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone, name, products })
    })
      .then(r => {
        console.log("responseArea!!!!");
        if (r.status !== 200) {
          this.setState({
            failed: true
          });
        } else {
          this.setState({
            succeed: true
          });
        }
      })
      .catch(() => {
        this.setState({
          failed: true
        });
      });
  };

  handleClick = () => {
    this.setState({
      active: true
    });
  };

  render() {
    const { active, phone, name, succeed, failed } = this.state;
    const { totalPrice } = this.props;
    const isValid = !!phone.length && !!name.length;
    return (
      <React.Fragment>
        <div className="checkout-button-container">
          <button
            onClick={this.handleClick}
            disabled={totalPrice === 0}
            className="checkout-button"
          >
            Оформить заказ
          </button>
        </div>
        {active && (
          <React.Fragment>
            <form className="form" onSubmit={this.onSubmit}>
              <label className="form__label" htmlFor="phone">
                Телефон
              </label>
              <input
                className="form__input"
                id="phone"
                type="text"
                value={phone}
                onChange={this.onPhoneChange}
                placeholder="Телефон"
              />
              <label className="form__label" htmlFor="name">
                Имя
              </label>
              <input
                id="name"
                type="text"
                className="form__input"
                value={name}
                onChange={this.onNameChange}
                placeholder="Имя"
              />
              <button
                disabled={!isValid}
                className="form__submit"
                type="submit"
                value="Отправить"
              >
                Отправить
              </button>
            </form>
            {succeed && (
              <div className="message message_succeed">
                Ваш заказ успешно оформлен!
              </div>
            )}
            {failed && (
              <div className="message message_error">
                Возникли проблемы при отправке!
              </div>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  totalPrice: state.totalPrice,
  products: state.products
});

export default connect(mapStateToProps)(Form);
