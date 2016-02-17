"use strict";

describe("2) Arrow functions", function() {
  var values = [1, 2, 3];

  it("callback-style anonymous functions", function() {
    var sum = values.map(function(number) {
      return number * 2;
    }).reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });

    expect(sum).toBe(12);
  });

  it("arrow-style anonymous functions", () => {
    var sum = values.map(x => x * 2).reduce((x, y) => x + y);

    expect(sum).toBe(12);
  });
});
