const nameFilter = require("../input");

// "only" for test this only

describe("all", () => {
    test("check ", () => {
        expect(nameFilter()).toBe("unkown");
      });
      test.skip("check ", () => {
        expect(nameFilter("mohamed")).toBe("mohamed");
      });
      test.only("check ", () => {
        expect(nameFilter("donia")).toBe("donia");
      });
})

