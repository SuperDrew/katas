const isArrayEmpty = (searchArray: number[]) =>
  !Array.isArray(searchArray) || searchArray.length === 0;

export const getMiddleOfSubsetIndex = (endIndex: number, startIndex: number) =>
  Math.floor((endIndex - startIndex) / 2) + startIndex;

const searchSubSet = (
  searchTarget: number,
  startIndex: number,
  endIndex: number,
  searchArray: number[]
): number => {
  const middleOfSubsetIndex = getMiddleOfSubsetIndex(endIndex, startIndex);
  const middleSubsetValue = searchArray[middleOfSubsetIndex];
  if (middleSubsetValue === searchTarget) return middleOfSubsetIndex;
  if (middleSubsetValue < searchTarget) {
    if (middleOfSubsetIndex === endIndex - 1) {
      if (searchArray[endIndex] === searchTarget) return endIndex;
      else return -1;
    }
    return searchSubSet(
      searchTarget,
      middleOfSubsetIndex,
      endIndex,
      searchArray
    );
  }
  if (middleSubsetValue > searchTarget) {
    if (middleOfSubsetIndex === 1) {
      if (searchArray[0] === searchTarget) return 0;
      else return -1;
    }
    return searchSubSet(
      searchTarget,
      startIndex,
      middleOfSubsetIndex,
      searchArray
    );
  }
  return -1;
};

export const chop = (searchTarget: number, searchArray: number[]) => {
  if (isArrayEmpty(searchArray)) return -1;
  if (searchArray.length === 1) {
    if (searchArray[0] === searchTarget) return 0;
    else return -1;
  }
  return searchSubSet(searchTarget, 0, searchArray.length - 1, searchArray);
};
