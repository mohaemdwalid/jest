const allData = require("../all");

test("hh", () => {
  expect(allData.length).toBe(3);
});
test("hh", () => {
  expect(allData).toHaveLength(3);
});
test("hh", () => {
  expect(allData).toContain(2);
});
test("hh", () => {
  expect(allData).not.toContain(6);
});
expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} To Be Larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} To Be Larger Than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check If Number Is Larger Than Other Number", () => {
  expect(10).toBeLargerThan(9);
});

expect.extend({
  toBeBetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `Expected ${received} To Be Between ${start} And ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected ${received} To Be Between ${start} And ${end}`,
        pass: false,
      };
    }
  },
});

test("Check If Year Is Between Years Range", () => {
  expect(1982).toBeBetween(1900, 2020);
});

test("Expect Anything", () => {
  let x = "A";
  expect("Osama").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
  expect(x).toEqual(expect.anything());
});
// expect.anything() => Anything But Undefined + Null

test("Expect Anything", () => {
  let x = "A";
  expect("Osama").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
  expect(x).toEqual(expect.anything());
});

// expect.any(Constructor)

test("Expect Any Constructor", () => {
  expect("Osama").toEqual(expect.any(String));
});

// expect.arrayContaining(array)

test("Expect Array To Be Found In The Main Array", () => {
  const myArray = [1, 2, 3, 4, 5, 6];
  expect(myArray).toEqual(expect.arrayContaining([5, 3, 4, 6]));
});
