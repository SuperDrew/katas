import { calculateFizzBuzz } from "./index";

describe("When supplied with max number to count to", () => {
  it.each([[1], [2], [5]])(
    "should print that many numbers, %s in this case",
    (number) => {
      const result = calculateFizzBuzz(number);
      expect(result.length).toBe(number);
    }
  );
});

describe("When printing", () => {
  it("Should print Fizz for numbers divisible by 3", () => {
    const result = calculateFizzBuzz(3);
    expect(result).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("Should print Buzz for numbers divisible by 5", () => {
    const result = calculateFizzBuzz(5);
    expect(result).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("Should print Pop for numbers divisible by 7", () => {
    const result = calculateFizzBuzz(7);
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
  it("Should print FizzBuzz for numbers divisible by both 3 and 5", () => {
    const result = calculateFizzBuzz(20);
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
    ]);
  });
});
