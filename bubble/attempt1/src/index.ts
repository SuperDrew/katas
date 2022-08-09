export const bubble = (data: number[]): number[] => {
  if (data.length === 0) return data;
  let done = false;
  while (!done) {
    let swappedAnElement = false;
    for (let i = 0; i < data.length - 2; i++) {
      if (data[i] < data[i + 1]) {
        const temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        swappedAnElement = true;
      }
    }
    if (!swappedAnElement) done = true;
  }
  if (data[0] > data[1]) {
    return [data[1], data[0]];
  }
  return data;
};
