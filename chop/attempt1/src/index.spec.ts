import { chop, getMiddleOfSubset } from ".";

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

  describe("Arrays with 4 values", () => {
    it.each([
      [0, 1, [1, 3, 5, 7]],
      [1, 3, [1, 3, 5, 7]],
      [2, 5, [1, 3, 5, 7]],
      [3, 7, [1, 3, 5, 7]],
      [-1, 0, [1, 3, 5, 7]],
      [-1, 2, [1, 3, 5, 7]],
      [-1, 4, [1, 3, 5, 7]],
      [-1, 6, [1, 3, 5, 7]],
      [-1, 8, [1, 3, 5, 7]],
    ])(
      "it should expect %s, when searching for %s in array %s",
      (expectedResponse, searchTarget, searchArray) => {
        expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
      }
    );
  });

  describe("DEBUG: ", () => {
    it.each([[2, 5, [1, 3, 5]]])(
      "DEBUG: it should expect %s, when searching for %s in array %s",
      (expectedResponse, searchTarget, searchArray) => {
        expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
      }
    );
  });
});

describe("Finding the middle of the subset", () => {
  it("should return 1 for 3 elements", () => {
    expect(getMiddleOfSubset(2, 0)).toBe(1);
  });
  it("should return 0 for 1 elements", () => {
    expect(getMiddleOfSubset(0, 0)).toBe(0);
  });
  it("should return 1 for 4 elements", () => {
    expect(getMiddleOfSubset(3, 0)).toBe(1);
  });
  it("should return 2 for 5 elements", () => {
    expect(getMiddleOfSubset(4, 0)).toBe(2);
  });
});
