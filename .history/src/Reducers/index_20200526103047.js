import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
  cartData: cartReducer,
  user: userInfoReducer,
});
