const { expect } = require("chai");
const { digitalRoot } = require("../digitalRoot.js");

describe("digitalRoot", function () {
  it("should return the correct digital root", () => {
    const four = digitalRoot(22);
    const nine = digitalRoot(657);
    expect(four).to.deep.equal(4);
    expect(nine).to.deep.equal(9);
  });
});
