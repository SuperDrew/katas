const isDivisibleBy = (number: number, divisor: number) => {
  return number % divisor === 0;
};

export const isLeapYear = (year: number) => {
  if (isDivisibleBy(year, 400)) {
    return true;
  } else if (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100)) {
    return true;
  } else return false;
};
