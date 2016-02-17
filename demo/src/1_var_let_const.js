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

  /* This needs to be run with the --force grunt option so that babel doesn't
  fail, because it detects that you're trying to overwrite a single-assigment
  variable. */
  // xit("const should be single-assigment", function() {
  //   const test = 1
  //   test = 20;
  //
  //   expect(test).toBe(20);
  // });
});
