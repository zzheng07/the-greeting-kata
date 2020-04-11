const greet = require("./greet");

test("should interpolate properly", () => {
  expect(greet("Bob")).toBe("Hello, Bob.");
});

test("should handle nulls", () => {
  expect(greet()).toBe("Hello, my friend.");
});

test("should handle shouting", () => {
  expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test("should handle two names of input", () => {
  expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

test("should handle an arbitrary number of names as input", () => {
  expect(greet(["Amy", "Brian", "Charlotte"]))
    .toBe("Hello, Amy, Brian, and Charlotte.");
});

test("should handle mixing of normal and shouted names", () => {
  expect(greet(["Amy", "BRIAN", "Charlotte"]))
    .toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test("should handle entries containing a comma", () => {
  expect(greet(["Bob", "Charlie, Dianne"]))
    .toBe("Hello, Bob, Charlie, and Dianne.");
});

test("should handle escaped string", () => {
  expect(greet(["Bob", '\\"Charlie, Dianne\\"']))
    .toBe("Hello, Bob and Charlie, Dianne.");
});
