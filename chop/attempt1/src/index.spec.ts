import { chop } from ".";

describe("Binary Chop", () => {
  it.each([[-1, 3, []]])(
    "it should expect %s, when searching for %s in array %s",
    (expectedResponse, searchTarget, searchArray) => {
      expect(chop(searchTarget, searchArray)).toBe(expectedResponse);
    }
  );
});
