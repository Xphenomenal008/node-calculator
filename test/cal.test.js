const { add, subtract, multiply, divide } = require("../index");

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplies numbers", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("divides numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divide by zero throws error", () => {
  expect(() => divide(10, 0)).toThrow();
});
