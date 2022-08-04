const isArrayEmpty = (searchArray: number[]) =>
  !Array.isArray(searchArray) || searchArray.length === 0;

export const getMiddleOfSubset = (endIndex: number, startIndex: number) =>
  Math.floor((endIndex - startIndex) / 2) + startIndex;

const searchSubSet = (
  searchTarget: number,
  startIndex: number,
  endIndex: number,
  searchArray: number[]
): number => {
  const middleOfSubset = getMiddleOfSubset(endIndex, startIndex);
  const middleSubsetValue = searchArray[middleOfSubset];
  if (middleSubsetValue === searchTarget) return middleOfSubset;
  if (middleSubsetValue < searchTarget) {
    return searchSubSet(searchTarget, middleOfSubset, endIndex, searchArray);
  }
  if (middleSubsetValue > searchTarget) {
    return searchSubSet(searchTarget, startIndex, middleOfSubset, searchArray);
  }
  return -1;
};

export const chop = (searchTarget: number, searchArray: number[]) => {
  if (isArrayEmpty(searchArray)) return -1;
  if (searchArray.length === 1 && searchArray[0] === searchTarget) return 0;
  else return -1;
  return searchSubSet(searchTarget, 0, searchArray.length - 1, searchArray);
  return -1;
};
