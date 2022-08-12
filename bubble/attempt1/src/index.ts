const swapElements = (data: number[], i: number) => {
  const temp = data[i];
  data[i] = data[i + 1];
  data[i + 1] = temp;
};

export const bubble = (data: number[]): number[] => {
  let done = false;
  while (!done) {
    let swappedAnElement = false;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > data[i + 1]) {
        swapElements(data, i);
        swappedAnElement = true;
      }
    }
    if (!swappedAnElement) done = true;
  }
  return data;
};
