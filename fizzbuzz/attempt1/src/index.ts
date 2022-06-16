interface IRule {
  applyRule(position: number, input: string): string;
}

class isDivisibleRule implements IRule {
  private lookup: Record<number, string> = { 3: "Fizz", 5: "Buzz" };
  applyRule(position: number, input: string): string {
    for (const lookupKey in this.lookup) {
      if (position % Number(lookupKey) === 0) {
        input += this.lookup[lookupKey];
      }
    }
    return input;
  }
}

export function calculateFizzBuzz(number: number): string[] {
  const result = [];
  for (let i = 1; i <= number; i++) {
    let stringToAdd = "";
    stringToAdd += new isDivisibleRule().applyRule(i, stringToAdd);
    if (stringToAdd === "") {
      stringToAdd = i.toString();
    }
    result.push(stringToAdd);
  }
  return result;
}
