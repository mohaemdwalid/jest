const theSum = require("../sum");

describe("all", () => {
  describe("one",()=>{
    test("return the number", () => {
      expect(theSum()).toBe(0);
    });
    test("return the number", () => {
      expect(theSum(10)).toBe(10);
    });
  })
  describe("two",()=>{
    test("return the plus number", () => {
      expect(theSum(10, 20)).toBe(30);
    });
    test("return the plus number", () => {
      expect(theSum(10, 20, 10)).toBe(40);
    });
  });
});