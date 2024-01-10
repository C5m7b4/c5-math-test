export const div = (a, b) => {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  }
  return a / b;
};
