import { INCREASE_COUNT } from "../Actions/types";

function cartReducer(state = {}, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return action.payload;
  }
}
