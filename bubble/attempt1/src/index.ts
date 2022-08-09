export function bubble(data: number[]): number[] {
  if (data.length === 0) return data;
  if (data[0] > data[1]) {
    return [data[1], data[0]];
  }
  return data;
}
