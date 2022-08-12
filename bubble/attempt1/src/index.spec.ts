import * as fc from "fast-check";

import { bubble } from ".";

describe("bubble", () => {
  describe("array with no elements", () => {
    it("should return the empty array", () => {
      expect(bubble([])).toStrictEqual([]);
    });
  });

  describe("array with 1 elements", () => {
    it("should return the same array", () => {
      fc.assert(
        fc.property(fc.integer(), (num) => {
          expect(bubble([num])).toStrictEqual([num]);
        })
      );
    });
  });

  describe("array with 2 elements", () => {
    describe(" that are already sorted", () => {
      it("should return a sorted array", () => {
        fc.assert(
          fc.property(
            fc
              .tuple(fc.integer(), fc.integer())
              .map(([a, b]) => (a <= b ? [a, b] : [b, a])),
            ([a, b]) => {
              expect(bubble([a, b])).toStrictEqual([a, b]);
            }
          )
        );
      });
    });
    describe(" that are not sorted", () => {
      it("should return a sorted array", () => {
        fc.assert(
          fc.property(
            fc
              .tuple(fc.integer(), fc.integer())
              .map(([a, b]) => (a <= b ? [a, b] : [b, a])),
            ([a, b]) => {
              expect(bubble([b, a])).toStrictEqual([a, b]);
            }
          ),
          { verbose: true }
        );
      });
    });
  });

  describe("array with 3 elements", () => {
    it("Should return a sorted array", () => {
      fc.assert(
        fc.property(
          fc.uniqueArray(fc.integer(), { minLength: 3, maxLength: 3 }),
          (data) => {
            const sortedData = [...data].sort((a, b) => a - b);
            const actual = bubble(data);
            expect(actual).toStrictEqual(sortedData);
          }
        ),
        { verbose: true }
      );
    });
  });
});
