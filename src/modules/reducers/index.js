import { combineReducers } from "redux";
import totalPrice from "./totalPriceReducer";
import products from "./productsReducer";

export default combineReducers({
  totalPrice,
  products
});
