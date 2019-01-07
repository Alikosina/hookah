import * as React from "react";
import HookahCalculatorItem from "../components/HookahCalculatorItem";
import { TASTE_OPTIONS } from "../utils/constants";
import "./HookahCalculatorContainer.scss";
import { connect } from "react-redux";

class HookahCalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      products: [
        {
          title: "Ананас",
          count: 0,
          price: 2000,
          taste: TASTE_OPTIONS[0]
        },
        {
          title: "Глиняная чаша",
          count: 0,
          price: 1400,
          taste: TASTE_OPTIONS[0]
        },
        {
          title: "Грейпфрут",
          count: 0,
          price: 1500,
          taste: TASTE_OPTIONS[0]
        },
        {
          title: "Помело",
          count: 0,
          price: 2200,
          taste: TASTE_OPTIONS[0]
        },
        {
          title: "Дыня",
          count: 0,
          price: 2800,
          taste: TASTE_OPTIONS[0]
        }
      ]
    };
  }

  changeTaste = (value, index) => {
    const { products } = this.state;
    products[index].taste = value;
    this.setState({
      products
    });
  };

  increaseCount = index => {
    const { products } = this.props;
    const product = Object.assign({}, products[index]);
    this.props.increase(product.price);
    this.props.increaseCount(index);
  };

  decreaseCount = index => {
    const { products } = this.props;
    const product = Object.assign({}, products[index]);
    if (product.count !== 0) {
      this.props.decrease(product.price);
      this.props.decreaseCount(index);
    }
  };

  calcPrice = (price, type) => {
    const { totalPrice } = this.state;
    const nextPrice = type === "plus" ? totalPrice + price : totalPrice - price;
    return nextPrice;
  };

  render() {
    const { totalPrice, products } = this.props;
    console.log("test = ", this.props.test);
    return (
      <React.Fragment>
        <h2 className="hookah-calculator-title">Меню</h2>
        <div className="hookah-calculator-container">
          {products.map((product, i) => (
            <HookahCalculatorItem
              onIncrease={this.increaseCount}
              onDecrease={this.decreaseCount}
              product={product}
              key={i}
              index={i}
              options={TASTE_OPTIONS}
              changeTaste={this.changeTaste}
            />
          ))}
        </div>
        <div className="total-price">Итоговая сумма: {totalPrice} &#8381;</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  totalPrice: state.totalPrice,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  increase: value => {
    dispatch({ type: "INCREASE", payload: value });
  },
  decrease: value => {
    dispatch({ type: "DECREASE", payload: value });
  },
  increaseCount: value => {
    dispatch({ type: "INCREASE_COUNT", payload: value });
  },
  decreaseCount: value => {
    dispatch({ type: "DECREASE_COUNT", payload: value });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HookahCalculatorContainer);
