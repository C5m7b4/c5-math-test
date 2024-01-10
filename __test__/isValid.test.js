import { isValid } from "../src";

describe("isValid", () => {
  test("should validate a string", () => {
    expect(isValid("")).toBeTruthy();
    expect(isValid(null)).toBeFalsy();
    expect(isValid(undefined)).toBeFalsy();
    expect(isValid(1)).toBeTruthy();
    expect(isValid("something")).toBeTruthy();
  });
});
