"use strict";

describe("4) destructuring", () => {
  it ("before destructuring", () => {
      var numbers = [1, 2, 3];
      var a = numbers[0];
      var b = numbers[1];

      var o = {
          c: 42,
          d: true
      };
      var c = o["c"];
      var d = o.d;

      expect(a).toBe(1);
      expect(b).toBe(2);
      expect(c).toBe(42);
      expect(d).toBe(true);

  });

  it("destructuring", () => {
    var [a, b] = [1, 2, 3];
    var {c, d} = {
        c: 42,
        d: true
    };

    expect(a).toBe(1);
    expect(b).toBe(2)
    expect(c).toBe(42);
    expect(d).toBe(true);
  });
});
