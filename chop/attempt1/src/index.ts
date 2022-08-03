const isArrayEmpty = (searchArray: number[]) =>
  !Array.isArray(searchArray) || searchArray.length === 0;

export const chop = (searchTarget: number, searchArray: number[]) => {
  if (isArrayEmpty(searchArray)) return -1;
  return 0;
};
