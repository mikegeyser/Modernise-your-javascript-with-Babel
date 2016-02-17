"use strict";

describe("3) template strings", () => {
  var a = "Centurion",
      b = "Developer UG",
      c = "Wednesday";

  it("string concatenation", () => {
    var greeting = "Hello " + a + " " + b + ". Happy " + c + "!";
    expect(greeting).toBe("Hello Centurion Developer UG. Happy Wednesday!");
  });

  it("string templates / interpolation", () => {
    var greeting = `Hello ${a} ${b}. Happy ${c}!`;
    expect(greeting).toBe("Hello Centurion Developer UG. Happy Wednesday!");
  });
});
