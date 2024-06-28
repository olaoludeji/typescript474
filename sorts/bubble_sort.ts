/**
/**
 * @description Performs a bubble sort on an array of numbers, swapping adjacent
 * elements if they are out of order.
 * 
 * @param { number[] } arr - 0-based array of numbers that is being manipulated and
 * returned by the function after successful iteration.
 * 
 * @returns { number[] } a sorted array of the original input values.
 */
export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      //iterating till the 2nd last element of array
      if (arr[j] > arr[j + 1]) {
        //current indexed number > next indexed number
        const temp: number = arr[j] //swapping two numbers
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
