export interface IRule {
  applyRule(position: number, targetString: string): string;
}

export class divisibleRule implements IRule {
  constructor(private divisorLookup: Record<number, string>) {}
  applyRule(position: number, targetString: string): string {
    for (const lookupKey in this.divisorLookup) {
      if (position % Number(lookupKey) === 0) {
        targetString += this.divisorLookup[lookupKey];
      }
    }
    return targetString;
  }
}

export class ContainsRule implements IRule {
  constructor(
    private numberToLookFor: number,
    private replacementString: string
  ) {}
  applyRule(position: number, targetString: string): string {
    if (position.toString().includes(this.numberToLookFor.toString())) {
      targetString += this.replacementString;
      return targetString;
    } else return targetString;
  }
}

export const FizzBuzzDivisorRules: Record<number, string> = {
  3: "Fizz",
  5: "Buzz",
};

export const FizzBuzzPopDivisorRules: Record<number, string> = {
  3: "Fizz",
  5: "Buzz",
  7: "Pop",
};

export interface Indexes {
  startIndex?: number;
  endIndex: number;
}

export function calculateWithRules(indexes: Indexes, rules: IRule[]): string[] {
  if (!indexes.startIndex) {
    indexes.startIndex = 1;
  }
  const results = [];
  for (let i = indexes.startIndex; i <= indexes.endIndex; i++) {
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
