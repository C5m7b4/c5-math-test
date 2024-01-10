import { add } from "../src";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
