import { chop } from ".";

describe("Binary Chop", () => {
  describe("Empty and Single value arrays", () => {
    it.each([
      [-1, 3, []],
      [-1, 3, [1]],
      [0, 1, [1]],
    ])(
      "it should expect %s, when searching for %s in array %s",
      (expectedResponse, searchTarget, searchArray) => {
        expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
      }
    );
  });

  describe("Arrays with 3 values", () => {
    it.each([
      [0, 1, [1, 3, 5]],
      [1, 3, [1, 3, 5]],
      [2, 5, [1, 3, 5]],
      [-1, 0, [1, 3, 5]],
      [-1, 2, [1, 3, 5]],
      [-1, 4, [1, 3, 5]],
      [-1, 6, [1, 3, 5]],
    ])(
      "it should expect %s, when searching for %s in array %s",
      (expectedResponse, searchTarget, searchArray) => {
        expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
      }
    );
  });
});
