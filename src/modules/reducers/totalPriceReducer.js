const initialState = 0;

const increaseCount = (state, action) => {
  console.log("state = ", state);
  console.log("action = ", action);
  return state + action.payload;
};

const decreaseCount = (state, action) => {
  console.log("state = ", state);
  console.log("action = ", action);
  return state === 0 ? state : state - action.payload;
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREASE":
      return increaseCount(state, action);
    case "DECREASE":
      return decreaseCount(state, action);
    default:
      return state;
  }
}
