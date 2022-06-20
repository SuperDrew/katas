import {
  calculateDivisorRules,
  ContainsRule,
  FizzBuzzDivisorRules,
  FizzBuzzPopDivisorRules,
  IRule,
} from "./index";

describe("When supplied with max number to count to", () => {
  it.each([[1], [2], [5]])(
    "should print that many numbers, %s in this case",
    (number) => {
      const result = calculateDivisorRules(number, FizzBuzzDivisorRules);
      expect(result.length).toBe(number);
    }
  );
});

describe("When using FizzBuzz", () => {
  it("Should print Fizz for numbers divisible by 3", () => {
    const result = calculateDivisorRules(3, FizzBuzzDivisorRules);
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers divisible by 5", () => {
    const result = calculateDivisorRules(5, FizzBuzzDivisorRules);
    expect(result).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("Should print FizzBuzz for numbers divisible by both 3 and 5", () => {
    const result = calculateDivisorRules(20, FizzBuzzDivisorRules);
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
    const result = calculateDivisorRules(3, FizzBuzzPopDivisorRules);
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers divisible by 5", () => {
    const result = calculateDivisorRules(5, FizzBuzzPopDivisorRules);
    expect(result).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("Should print Pop for numbers divisible by 7", () => {
    const result = calculateDivisorRules(7, FizzBuzzPopDivisorRules);
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
    const result = calculateDivisorRules(21, FizzBuzzPopDivisorRules);
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

function calculateWithRules(
  startIndex: number,
  endIndex: number,
  rules: IRule[]
): string[] {
  const results = [];
  for (let i = startIndex; i <= endIndex; i++) {
    let result = "";
    for (const rule of rules) {
      result = rule.applyRule(i, result);
    }
    if (result === "") {
      result = i.toString();
    }
    results.push(result);
  }
  return results;
}

describe("When using number containing rules", () => {
  it("Should print Fizz for numbers including 3", () => {
    const result = calculateWithRules(1, 3, [new ContainsRule(3, "Fizz")]);
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers including 5", () => {
    const result = calculateWithRules(4, 5, [new ContainsRule(5, "Buzz")]);
    expect(result).toStrictEqual(["4", "Buzz"]);
  });
  it("Should print FizzBuzz for numbers including 3 and 5", () => {
    const result = calculateWithRules(34, 35, [
      new ContainsRule(3, "Fizz"),
      new ContainsRule(5, "Buzz"),
    ]);
    expect(result).toStrictEqual(["Fizz", "FizzBuzz"]);
  });
});
