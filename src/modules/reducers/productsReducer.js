import { TASTE_OPTIONS } from "../../utils/constants";

const initialState = [
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

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return increaseCount(state, action);
    case "DECREASE_COUNT":
      return decreaseCount(state, action);
    default:
      return state;
  }
}
