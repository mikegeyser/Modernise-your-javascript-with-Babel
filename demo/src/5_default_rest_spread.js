"use strict";

describe("5) default / rest / spread", () => {

  it("old defaulting and dealing with arguments array", () => {
    var thingy = function(first) {
      first = first || 0;

      return {
        first: first,
        other: arguments.length ? arguments.length - 1 : 0
      }
    };

    expect(thingy()).toEqual({ first: 0, other: 0 });
    expect(thingy(1)).toEqual({ first: 1, other: 0 });
    expect(thingy(1, 2)).toEqual({ first: 1, other: 1 });
  });

  it("default and rest operator", () => {
    var thingy = function(first = 0, ...args) {
      return {
        first: first,
        other: args.length
      }
    };

    //expect(thingy()).toEqual({ first: 0, other: 0 });
    expect(thingy(1)).toEqual({ first: 1, other: 0 });
    expect(thingy(1, 2)).toEqual({ first: 1, other: 1 });
    expect(thingy(...[1, 2, 3])).toEqual({ first: 1, other: 2 });
  });
});
