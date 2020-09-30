// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  expect(reverseIt("Kurt Fizzard")).toBe("drazziF truK");
  expect(reverseIt(6)).toBe(undefined);
  expect(reverseIt([1, 2, 3, 4, 5])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
