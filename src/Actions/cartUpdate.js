import { INCREASE_COUNT, DECREASE_COUNT } from "./types";

export function increaseItemCount(increaseBy) {
  return {
    type: INCREASE_COUNT,
    payload: increaseBy,
  };
}

export function decreaseItemCount(decreaseBy) {
  return {
    type: DECREASE_COUNT,
    payload: decreaseBy,
  };
}
