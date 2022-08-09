import { bubble } from "./index";

describe("bubble", () => {
  describe("array with no elements", () => {
    it("should return the empty array", () => {
      expect(bubble([])).toStrictEqual([]);
    });
  });
});
