import { INCREASE_COUNT } from "./types";

export function increaseItemCount(increaseBy) {
  return {
    type: INCREASE_COUNT,
    payload: increaseBy,
  };
}
