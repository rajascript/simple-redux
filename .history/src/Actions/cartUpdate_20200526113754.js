import { INCREASE_COUNT, DECREASE_COUNT } from "./types";

export function increaseItemCount(increaseBy) {
  return {
    type: INCREASE_COUNT,
    payload: increaseBy,
  };
}

export function decreaseItemCount(increaseBy) {
  return {
    type: DECREASE_COUNT,
    payload: increaseBy,
  };
}
