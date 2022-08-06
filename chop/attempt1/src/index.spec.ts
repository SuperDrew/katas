import * as fc from "fast-check";

import { chop, getMiddleOfSubsetIndex } from ".";

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

  describe("Arrays with 2 values", () => {
    it.each([
      [0, 1, [1, 3]],
      [1, 3, [1, 3]],
      [-1, 0, [1, 3]],
      [-1, 2, [1, 3]],
      [-1, 4, [1, 3]],
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
    it.each([[1, 3, [1, 3]]])(
      "DEBUG: it should expect %s, when searching for %s in array %s",
      (expectedResponse, searchTarget, searchArray) => {
        expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
      }
    );
  });
});

describe("Finding the middle of the subset", () => {
  it("should return 1 for 3 elements", () => {
    expect(getMiddleOfSubsetIndex(2, 0)).toBe(1);
  });
  it("should return 0 for 1 elements", () => {
    expect(getMiddleOfSubsetIndex(0, 0)).toBe(0);
  });
  it("should return 1 for 4 elements", () => {
    expect(getMiddleOfSubsetIndex(3, 0)).toBe(1);
  });
  it("should return 2 for 5 elements", () => {
    expect(getMiddleOfSubsetIndex(4, 0)).toBe(2);
  });
});

describe("Property based tests", () => {
  it("should return the index of a number in a sorted array", () => {
    fc.assert(
      fc.property(fc.array(fc.integer(), { minLength: 1 }), (data) => {
        const sortedArray = data.sort((a, b) => a - b);
        const expectedIndex = Math.floor(Math.random() * sortedArray.length);
        const searchTarget = sortedArray[expectedIndex];
        expect(chop(searchTarget, sortedArray)).toBe(expectedIndex);
      }),
      { verbose: true }
    );
  });

  it("should return -1 for a number not in a sorted array", () => {
    fc.assert(
      fc.property(fc.uniqueArray(fc.integer(), { minLength: 2 }), (data) => {
        const sortedArray = data.sort((a, b) => a - b);
        const indexToRemove = Math.floor(Math.random() * sortedArray.length);
        const searchTarget = sortedArray[indexToRemove];
        sortedArray.splice(indexToRemove, 1);
        expect(chop(searchTarget, sortedArray)).toBe(-1);
      }),
      { verbose: true }
    );
  });
});
