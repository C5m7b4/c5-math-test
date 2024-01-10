import { mul } from "../src";

describe("mul", () => {
  test("should multiply two numbers", () => {
    expect(mul(2, 3)).toEqual(6);
  });
});
