"use strict";

import { doStuff } from "util/2_new_modules";

describe("2) module: ", function(){

  it("revealing module", function(){
      expect(v5_revealing_module.doStuff).toBeDefined();
  });
})
