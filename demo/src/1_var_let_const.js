"use strict";

describe("1) var / let / const: ", function() {

  it("var should be function scoped", function() {
    var test = 1

    for (var i = 0; i <= 10; i++) {
      var test = i * 2;
    }

    expect(test).toBe(20);
  })

  it("let should be block scoped", function() {
    let test = 1

    for (let i = 0; i <= 10; i++) {
      let test = i * 2;
    }

    expect(test).toBe(1);
  });

  // xit("const should be immutable", function() {
  //   const test = 1
  //   test = 20;
  //
  //   expect(test).toBe(20);
  // });
});
