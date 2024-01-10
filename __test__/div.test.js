import { div } from "../src";

describe("div", () => {
  test("should divide two numbers", () => {
    expect(div(6, 2)).toEqual(3);
  });
  test("should handle divide by zero", () => {
    let errorMessage = "";
    try {
      expect(div(2, 0)).toEqual(0);
    } catch (error) {
      errorMessage = error.message;
    }
    expect(errorMessage).toEqual("cannot divide by zero");
  });
});
