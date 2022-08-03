const isArrayEmpty = (searchArray: number[]) =>
  !Array.isArray(searchArray) || searchArray.length === 0;

export const chop = (searchTarget: number, searchArray: number[]) => {
  if (isArrayEmpty(searchArray)) return -1;
  if (searchArray.length === 1 && searchArray[0] === searchTarget) return 0;
  const middleOfArray = Math.floor(searchArray.length / 2);
  const middleArrayValue = searchArray[middleOfArray];
  if (middleArrayValue === searchTarget) return middleOfArray;
  else if (middleArrayValue < searchTarget) {
    if (searchArray[middleOfArray + 1] === searchTarget)
      return middleOfArray + 1;
  } else {
    if (searchArray[middleOfArray - 1] === searchTarget)
      return middleOfArray - 1;
  }
  return -1;
};
