/**
 * @description Randomly rearranges the elements of an array, preserving its original
 * order and structure.
 * 
 * @param { number[] } arr - 1D array to be shuffled.
 */
export function shuffleArray(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
