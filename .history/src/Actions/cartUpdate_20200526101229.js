export function increaseItemCount(increaseBy) {
  return {
    type: "increaseCount",
    payload: increaseBy,
  };
}
