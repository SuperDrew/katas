import {
  calculateWithRules,
  ContainsRule,
  divisibleRule,
  FizzBuzzDivisorRules,
  FizzBuzzPopDivisorRules,
} from "./index";

describe("When supplied with max number to count to", () => {
  it.each([[1], [2], [5]])(
    "should print that many numbers, %s in this case",
    (number) => {
      const result = calculateWithRules({ endIndex: number }, [
        new divisibleRule(FizzBuzzDivisorRules),
      ]);
      expect(result.length).toBe(number);
    }
  );
});

describe("When using FizzBuzz", () => {
  it("Should print Fizz for numbers divisible by 3", () => {
    const result = calculateWithRules({ endIndex: 3 }, [
      new divisibleRule(FizzBuzzDivisorRules),
    ]);
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers divisible by 5", () => {
    const result = calculateWithRules({ endIndex: 5 }, [
      new divisibleRule(FizzBuzzDivisorRules),
    ]);
    expect(result).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("Should print FizzBuzz for numbers divisible by both 3 and 5", () => {
    const result = calculateWithRules({ endIndex: 20 }, [
      new divisibleRule(FizzBuzzDivisorRules),
    ]);
    expect(result).toStrictEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16",
      "17",
      "Fizz",
      "19",
      "Buzz",
    ]);
  });
});

describe("When using FizzBuzzPop", () => {
  it("Should print Fizz for numbers divisible by 3", () => {
    const result = calculateWithRules({ endIndex: 3 }, [
      new divisibleRule(FizzBuzzPopDivisorRules),
    ]);
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers divisible by 5", () => {
    const result = calculateWithRules({ endIndex: 5 }, [
      new divisibleRule(FizzBuzzPopDivisorRules),
    ]);
    expect(result).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("Should print Pop for numbers divisible by 7", () => {
    const result = calculateWithRules({ endIndex: 7 }, [
      new divisibleRule(FizzBuzzPopDivisorRules),
    ]);
    expect(result).toStrictEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "Pop",
    ]);
  });
  it("Should print FizzBuzz for numbers divisible by both 3 and 5 and FizzPop for 3 and 7", () => {
    const result = calculateWithRules({ endIndex: 21 }, [
      new divisibleRule(FizzBuzzPopDivisorRules),
    ]);
    expect(result).toStrictEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "Pop",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "Pop",
      "FizzBuzz",
      "16",
      "17",
      "Fizz",
      "19",
      "Buzz",
      "FizzPop",
    ]);
  });
});

describe("When using number containing rules", () => {
  it("Should print Fizz for numbers including 3", () => {
    const result = calculateWithRules(
      {
        startIndex: 1,
        endIndex: 3,
      },
      [new ContainsRule(3, "Fizz")]
    );
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers including 5", () => {
    const result = calculateWithRules(
      {
        startIndex: 4,
        endIndex: 5,
      },
      [new ContainsRule(5, "Buzz")]
    );
    expect(result).toStrictEqual(["4", "Buzz"]);
  });
  it("Should print FizzBuzz for numbers including 3 and 5", () => {
    const result = calculateWithRules(
      {
        startIndex: 34,
        endIndex: 35,
      },
      [new ContainsRule(3, "Fizz"), new ContainsRule(5, "Buzz")]
    );
    expect(result).toStrictEqual(["Fizz", "FizzBuzz"]);
  });
});
