import { INCREASE_COUNT, DECREASE_COUNT } from "../Actions/types";

export default function cartReducer(state = { itemCount: 1 }, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { itemCount: state.itemCount + action.payload };
    case DECREASE_COUNT:
      return { itemCount: state.itemCount - action.payload };
    default:
      return state;
  }
}
