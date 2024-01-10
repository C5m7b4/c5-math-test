import { sub } from "../src";

describe("sub", () => {
  test("should subtract two number", () => {
    expect(sub(2, 1)).toEqual(1);
  });
});
