import { INCREASE_COUNT } from "../Actions/types";

export function cartReducer(state = { items: 1 }, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { items: state.items + action.payload };
  }
}
