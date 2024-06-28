/**
 * A Disjoint Set is a data structure that keeps track of a set of elements
 * partitioned into a number of disjoint (non-overlapping) subsets.
 * Elements are uniquely represented by an index (0-based).
 *
 * The find operation uses path compression.
 * This allows the time complexity of the find operation be O(alpha(n)).
 * alpha(n) being the inverse Ackermann function.
 *
 * The join operation uses union by size: The smaller set is joined to the bigger one.
 *
 * You can perform the following operations on the disjoint set:
 * - find: Determine which subset a particular element is in - O(alpha(n))
 * - join: Join two subsets into a single subset - O(1)
 * - isSame: Check if two elements are in the same subset - O(1)
 */
export class DisjointSet {
  /** Direct parent for an element */
  private head: number[]

  /** Size of the subtree above an element */
  private size: number[]

  /**
   * @description Creates an array and fills its size, head element with length given
   * number
   * 
   * @param { number } n - number of sets that will be generated, and it determines the
   * size of each set's id array and the size of each set's internal array.
   */
  constructor(n: number) {
    // Initially each set has its own id element
    this.head = Array.from({ length: n }, (_, index) => index)
    this.size = Array(n).fill(1)
  }

  /**
   * @description Uses path compression to traverse a linked list from the `head`
   * pointer. It recursively traverses the list until finding the specified `index`,
   * and returns the value associated with that index in the list.
   * 
   * @param { number } index - 0-based index of the element to be found in the linked
   * list.
   * 
   * @returns { number } the value of the specified index in the linked list.
   */
  find(index: number): number {
    if (this.head[index] != index) {
      // Use path compression (set an edge between the element and its head)
      this.head[index] = this.find(this.head[index])
    }
    return this.head[index]
  }

  /**
   * @description Takes two sets as inputs and combines them by keeping the bigger set's
   * head and updating its size, then merges the smaller set with the bigger one by
   * assigning its head to the bigger one.
   * 
   * @param { number } first - set to which the root of the second set will be joined.
   * 
   * @param { number } second - 2nd array to be joined with the 1st array in the function,
   * and it is used to determine which set is bigger and which set to keep as the new
   * head of the combined sets.
   */
  join(first: number, second: number): void {
    // Get the root of each set to join
    let firstHead = this.find(first)
    let secondHead = this.find(second)

    // If they're the same (same set)
    if (firstHead === secondHead) return

    // Keep the bigger set in firstHead
    if (this.size[firstHead] < this.size[secondHead]) {
      ;[firstHead, secondHead] = [secondHead, firstHead]
    }

    // Join the smallest set with the bigger one
    this.head[secondHead] = firstHead

    // Update size of the bigger set after join
    this.size[firstHead] += this.size[secondHead]
  }

  /**
   * @description Compares two numbers and returns true if they are equal, false otherwise.
   * 
   * @param { number } first - first value being compared to find if it is the same as
   * the second value provided as input.
   * 
   * @param { number } second - 2nd number to compare with the first number using the
   * `find()` method.
   * 
   * @returns { boolean } a boolean indicating whether two numbers are equal.
   */
  isSame(first: number, second: number): boolean {
    return this.find(first) === this.find(second)
  }
}
