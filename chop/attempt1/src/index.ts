const isArrayEmpty = (searchArray: number[]): boolean =>
  !Array.isArray(searchArray) || searchArray.length === 0;

export const getMiddleOfSubsetIndex = (
  endIndex: number,
  startIndex: number
): number => Math.floor((endIndex - startIndex) / 2) + startIndex;

const searchSubSet = (
  searchTarget: number,
  startIndex: number,
  endIndex: number,
  searchArray: number[]
): number => {
  const middleOfSubsetIndex = getMiddleOfSubsetIndex(endIndex, startIndex);
  const middleSubsetValue = searchArray[middleOfSubsetIndex];
  if (middleSubsetValue === searchTarget) return middleOfSubsetIndex;
  if (startIndex === endIndex) return -1;
  if (middleSubsetValue < searchTarget) {
    //check if the value is between the closest two indexes to prevent infinite loop
    if (searchTarget < searchArray[middleOfSubsetIndex + 1]) return -1;
    return searchSubSet(
      searchTarget,
      middleOfSubsetIndex + 1,
      endIndex,
      searchArray
    );
  }
  if (middleSubsetValue > searchTarget) {
    return searchSubSet(
      searchTarget,
      startIndex,
      middleOfSubsetIndex - 1,
      searchArray
    );
  }
  return -1;
};

export const chop = (searchTarget: number, searchArray: number[]): number => {
  if (isArrayEmpty(searchArray)) return -1;
  if (searchArray.length === 1) {
    if (searchArray[0] === searchTarget) return 0;
    else return -1;
  }
  return searchSubSet(searchTarget, 0, searchArray.length - 1, searchArray);
};
