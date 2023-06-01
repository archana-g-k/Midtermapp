import { createStore } from "redux";
import { cartReducer } from "./reducers/cart-reducer";
const mystore = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default mystore;
