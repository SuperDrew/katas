export function calculateFizzBuzz(number: number): string[] {
  const result = [];
  for (let i = 1; i <= number; i++) {
    let stringToAdd = "";
    if (i % 3 === 0) {
      stringToAdd += "Fizz";
    }
    if (i % 5 === 0) {
      stringToAdd += "Buzz";
    }
    if (stringToAdd === "") {
      stringToAdd = i.toString();
    }
    result.push(stringToAdd);
  }
  return result;
}
