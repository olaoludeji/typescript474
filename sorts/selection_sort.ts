/**
/**
 * @description Iteratively sorts an array of items by repeatedly selecting the
 * smallest item and exchanging it with a random positioned item greater than itself
 * until the entire array is sorted.
 * 
 * @param { number[] } items - 0-based index of an array of numbers to be iterated
 * and compared for minimum value.
 * 
 * @returns { array } the sorted list of integers, with the least item in each segment
 * of the list exchanged with its proper position.
 */
export const selectionSort = (items: number[]) => {
  for (let i = 0; i < items.length; i++) {
    let min = i
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j
      }
    }
    if (i !== min) {
      ;[items[i], items[min]] = [items[min], items[i]]
    }
  }
  return items
}
