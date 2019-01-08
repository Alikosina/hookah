import * as React from "react";
import Select from "react-select";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./HookahCalculatorItem.scss";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "#000",
    padding: 20
  }),
  group: () => ({
    border: "1px solid #fff"
  })
};

export default class HookahCalculatorItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.product.taste
    };
  }

  handleChange = (value, index) => {
    this.props.changeTaste(value, index);
    this.setState({
      selectedValue: value
    });
  };

  render() {
    const { product, index, options, changeTaste } = this.props;
    return (
      <div className="hookah-calculator-item">
        <div className="hookah-calculator-item__title">{product.title}</div>
        <div className="hookah-calculator-item__price">
          {product.price} &#8381;
        </div>
        <div className="hookah-calculator-item__counter">
          <div className="hookah-calculator-item__counter__number">
            {product.count}
          </div>
          <div className="hookah-calculator-item__counter__symbols">
            <div
              onClick={() => {
                this.props.onIncrease(index);
              }}
              className="hookah-calculator-item__counter__symbols__item"
            >
              <FaPlus />
            </div>
            <div
              onClick={() => {
                this.props.onDecrease(index);
              }}
              className="hookah-calculator-item__counter__symbols__item"
            >
              <FaMinus />
            </div>
          </div>
        </div>
        <div className="hookah-calculator-item__taste">
          <Select
            options={options}
            onChange={value => {
              this.handleChange(value, index);
            }}
            styles={customStyles}
            value={this.state.selectedValue}
          />
        </div>
      </div>
    );
  }
}
