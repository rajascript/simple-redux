import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
combineReducers({
  cartData: cartReducer,
});
