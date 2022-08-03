const isDivisibleBy = (number: number, divisor: number) => {
  return number % divisor === 0;
};

export const isLeapYear = (year: number) => {
  return (
    isDivisibleBy(year, 400) ||
    (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100))
  );
};
