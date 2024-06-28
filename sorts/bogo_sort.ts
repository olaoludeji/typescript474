import { isSortedArray } from '../other/is_sorted_array'
import { shuffleArray } from '../other/shuffle_array'

/**
 * @description Sorts an array of numbers by repeatedly shuffling it until it is sorted.
 * 
 * @param { number[] } arr - 2D array to be sorted, which is manipulated by the
 * `bogoSort` function until it is determined to be sorted according to the provided
 * `isSortedArray()` method.
 * 
 * @returns { number[] } a sorted array of numbers.
 */
export function bogoSort(arr: number[]): number[] {
  while (!isSortedArray(arr)) {
    shuffleArray(arr)
  }
  return arr
}
