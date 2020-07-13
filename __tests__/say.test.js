const say = require("../say");

test("hello jest", () => {
  expect(say()).toBe("hello jest");
});
