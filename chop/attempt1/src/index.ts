export const getMiddleIndexOfArray = (array: number[]): number =>
  Math.floor((array.length - 1) / 2);

const searchSubSet = (
  searchTarget: number,
  indexOffset: number,
  searchArray: number[]
): number => {
  const middleOfSubsetIndex = getMiddleIndexOfArray(searchArray);
  const middleSubsetValue = searchArray[middleOfSubsetIndex];
  if (middleSubsetValue === searchTarget)
    return middleOfSubsetIndex + indexOffset;
  if (middleSubsetValue < searchTarget) {
    return searchSubSet(
      searchTarget,
      indexOffset + middleOfSubsetIndex + 1,
      searchArray.slice(middleOfSubsetIndex + 1)
    );
  }
  if (middleSubsetValue > searchTarget) {
    return searchSubSet(
      searchTarget,
      indexOffset,
      searchArray.slice(0, middleOfSubsetIndex)
    );
  }
  return -1;
};

export const chop = (searchTarget: number, searchArray: number[]): number => {
  return searchSubSet(searchTarget, 0, searchArray);
};
