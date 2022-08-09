import * as fc from "fast-check";

import { chop, getMiddleIndexOfArray } from ".";

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
    it.each([[3, 7, [1, 3, 5, 7]]])(
      "DEBUG: it should expect %s, when searching for %s in array %s",
      (expectedResponse, searchTarget, searchArray) => {
        expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
      }
    );
  });
});

describe("Finding the middle of the subset", () => {
  it("should return 1 for 3 elements", () => {
    expect(getMiddleIndexOfArray([1, 2, 3])).toBe(1);
  });
  it("should return 0 for 1 elements", () => {
    expect(getMiddleIndexOfArray([0])).toBe(0);
  });
  it("should return 1 for 4 elements", () => {
    expect(getMiddleIndexOfArray([1, 2, 3, 4])).toBe(1);
  });
  it("should return 2 for 5 elements", () => {
    expect(getMiddleIndexOfArray([1, 2, 3, 4, 5])).toBe(2);
  });
});

describe("Property based tests", () => {
  it("should return the index of a number in a sorted array", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 1000 }).chain((arrayLength) =>
          fc.tuple(
            fc.integer({ min: 0, max: arrayLength - 1 }),
            fc.uniqueArray(fc.integer(), {
              minLength: arrayLength,
              maxLength: arrayLength,
            })
          )
        ),
        (data) => {
          const expectedIndex = data[0];
          const sortedArray = data[1].sort((a, b) => a - b);
          const searchTarget = sortedArray[expectedIndex];
          expect(chop(searchTarget, sortedArray)).toBe(expectedIndex);
        }
      ),
      { verbose: true }
    );
  });

  it("should return -1 for a number not in a sorted array", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 1000 }).chain((arrayLength) =>
          fc.tuple(
            fc.integer({ min: 0, max: arrayLength - 1 }),
            fc.uniqueArray(fc.integer(), {
              minLength: arrayLength,
              maxLength: arrayLength,
            })
          )
        ),
        (data) => {
          const indexToRemove = data[0];
          const sortedArray = data[1].sort((a, b) => a - b);
          const searchTarget = sortedArray[indexToRemove];
          sortedArray.splice(indexToRemove, 1);
          expect(chop(searchTarget, sortedArray)).toBe(-1);
        }
      ),
      { verbose: true }
    );
  });
});
