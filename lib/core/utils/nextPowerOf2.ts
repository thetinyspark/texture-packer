export default function getNextPowerOf2(value: number): number {
  let num: number = 1;
  while (num < value) {
    num *= 2;
  }

  return num;
}
