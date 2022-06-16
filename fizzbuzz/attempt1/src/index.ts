interface IRule {
  applyRule(position: number, input: string): string;
}

class isDivisibleRule implements IRule {
  constructor(private divisorLookup: Record<number, string>) {}
  applyRule(position: number, input: string): string {
    for (const lookupKey in this.divisorLookup) {
      if (position % Number(lookupKey) === 0) {
        input += this.divisorLookup[lookupKey];
      }
    }
    return input;
  }
}

export function calculateFizzBuzz(
  number: number,
  divisorLookup: Record<number, string> = {
    3: "Fizz",
    5: "Buzz",
  }
): string[] {
  const result = [];
  const fizzBuzzDivisibleRule = new isDivisibleRule(divisorLookup);
  for (let i = 1; i <= number; i++) {
    let stringToAdd = "";
    stringToAdd += fizzBuzzDivisibleRule.applyRule(i, stringToAdd);
    if (stringToAdd === "") {
      stringToAdd = i.toString();
    }
    result.push(stringToAdd);
  }
  return result;
}

export function calculateFizzBuzzPop(number: number): string[] {
  const result = [];
  const fizzBuzzDivisibleRule = new isDivisibleRule({
    3: "Fizz",
    5: "Buzz",
    7: "Pop",
  });
  for (let i = 1; i <= number; i++) {
    let stringToAdd = "";
    stringToAdd += fizzBuzzDivisibleRule.applyRule(i, stringToAdd);
    if (stringToAdd === "") {
      stringToAdd = i.toString();
    }
    result.push(stringToAdd);
  }
  return result;
}
