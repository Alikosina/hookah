import * as React from "react";
import { connect } from "react-redux";
import "./Form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      name: "",
      active: false
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
    console.log("value = ", this.state);
    fetch("http://185.178.47.62:8081/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone, name, products })
    });
  };

  handleClick = () => {
    this.setState({
      active: true
    });
  };

  render() {
    const { active, phone, name } = this.state;
    const { totalPrice } = this.props;
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
          <form className="form" onSubmit={this.onSubmit}>
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={this.onPhoneChange}
              placeholder="количество"
            />
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={this.onNameChange}
              placeholder="количество"
            />
            <input type="submit" value="Отправить" />
          </form>
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
