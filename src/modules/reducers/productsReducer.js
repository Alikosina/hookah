import { TASTE_OPTIONS } from "../../utils/constants";

const initialState = [
  {
    title: "Грейпфрут",
    count: 0,
    value: "grapefruit",
    price: 1500,
    taste: TASTE_OPTIONS[0],
    tasteValue: TASTE_OPTIONS[0].value
  },
  {
    title: "Ананас",
    count: 0,
    value: "pineapple",
    price: 2000,
    taste: TASTE_OPTIONS[0],
    tasteValue: TASTE_OPTIONS[0].value
  },
  // {
  //   title: "Глиняная чаша",
  //   count: 0,
  //   value: "cup",
  //   price: 1400,
  //   taste: TASTE_OPTIONS[0],
  //   tasteValue: TASTE_OPTIONS[0].value
  // },
  {
    title: "Помело",
    count: 0,
    value: "pomelo",
    price: 2200,
    taste: TASTE_OPTIONS[0],
    tasteValue: TASTE_OPTIONS[0].value
  },
  {
    title: "Дыня",
    count: 0,
    value: "melon",
    price: 2800,
    taste: TASTE_OPTIONS[0],
    tasteValue: TASTE_OPTIONS[0].value
  }
];

const increaseCount = (state, action) => {
  const index = action.payload;
  const product = Object.assign({}, state[index]);
  const count = product.count;
  product.count = count + 1;
  state[index] = product;
  return state;
};

const decreaseCount = (state, action) => {
  const index = action.payload;
  const product = Object.assign({}, state[index]);
  const count = product.count;
  product.count = product.count !== 0 ? count - 1 : 0;
  state[index] = product;
  return state;
};

const changeTaste = (state, action) => {
  state[action.payload.index].taste = action.payload.value;
  return state;
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return increaseCount(state, action);
    case "DECREASE_COUNT":
      return decreaseCount(state, action);
    case "CHANGE_TASTE":
      return changeTaste(state, action);
    default:
      return state;
  }
}
