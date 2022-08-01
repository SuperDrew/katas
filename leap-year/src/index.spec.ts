import { isLeapYear } from "./index";

describe("When asking if a year is a leap year", () => {
  it("should return true when it is", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  it("should return false when it is not", () => {
    expect(isLeapYear(1999)).toBe(false);
  });
});

describe("All years divisible by 400 ARE leap years", () => {
  it.each([[400], [800], [1200], [1600], [2000]])(
    "%s is a leap year",
    (year: number) => {
      expect(isLeapYear(year)).toBe(true);
    }
  );
});

describe("All years divisible by 100 but not by 400 are NOT leap years", () => {
  it.each([[1700], [1800], [1900], [2100]])(
    "%s is not a leap year",
    (year: number) => {
      expect(isLeapYear(year)).toBe(false);
    }
  );
});

describe("All years divisible by 4 but not by 100 ARE leap years", () => {
  it.each([[2008], [2012], [2016]])("%s is a leap year", (year: number) => {
    expect(isLeapYear(year)).toBe(true);
  });
});

describe("All years not divisible by 4 are NOT leap years", () => {
  it.each([[2017], [2018], [2019]])("%s is not a leap year", (year: number) => {
    expect(isLeapYear(year)).toBe(false);
  });
});
