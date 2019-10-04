const randomString = require("./index.js");

describe("correct test output", () => {
  it("blank should return null", () => {
    expect(randomString()).toBe(null);
  });

  it("space should return null", () => {
    expect(randomString(" ")).toBe(null);
  });

  it("underscore should return null", () => {
    expect(randomString("_")).toBe(null);
  });

  it("letters should return null", () => {
    expect(randomString("a")).toBe(null);
    expect(randomString("b")).toBe(null);
    expect(randomString("ab")).toBe(null);
    expect(randomString("ABC")).toBe(null);
  });

  it("numbers should return null", () => {
    expect(randomString(1)).not.toBe(null);
    expect(randomString(100)).not.toBe(null);
    expect(randomString(9)).not.toBe(null);
  });
});
