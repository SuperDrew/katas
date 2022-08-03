const isArrayEmpty = (searchArray: number[]) =>
  !Array.isArray(searchArray) || searchArray.length === 0;

export const chop = (searchTarget: number, searchArray: number[]) => {
  if (isArrayEmpty(searchArray)) return -1;
  if (searchArray.length === 1 && searchArray[0] === searchTarget) return 0;
  return -1;
};
