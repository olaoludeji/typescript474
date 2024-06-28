/**
 * Circular Queue implementation using array.
 *
 * @template T The type of the elements in the queue.
 * @param {T[]} queue The array that holds the elements of the queue.
 * @param {number} frontIndex The index of the front element of the queue.
 * @param {number} rearIndex The index of the rear element of the queue.
 * @param {number} size The size of the queue.
 */
export class CircularQueue<T> {
  private queue: T[]
  private frontIndex: number
  private rearIndex: number
  private size: number

  /**
   * @description Initializes a Circular Queue with the given size by creating an empty
   * array and storing its size. It also sets the front and rear indices to -1 and the
   * overall size.
   * 
   * @param { number } size - amount of elements that will be stored in the queue when
   * the constructor is called.
   */
  constructor(size: number) {
    this.queue = new Array(size)
    this.frontIndex = -1
    this.rearIndex = -1
    this.size = size
  }

  /**
   * @description Manages the insertion of items into a queue. It checks if the queue
   * is full and raises an error if it is, or updates the indices of the front and rear
   * elements and adds the new item to the end of the queue otherwise.
   * 
   * @param { T } item - value that is to be enqueued into the queue.
   */
  enqueue(item: T): void {
    if (
      (this.frontIndex == 0 && this.rearIndex == this.size - 1) ||
      this.rearIndex == (this.frontIndex - 1) % (this.size - 1)
    ) {
      throw new Error('Queue is full')
    } else if (this.frontIndex == -1) {
      this.frontIndex = 0
      this.rearIndex = 0
      this.queue[this.rearIndex] = item
    } else if (this.rearIndex == this.size - 1 && this.frontIndex != 0) {
      this.rearIndex = 0
      this.queue[this.rearIndex] = item
    } else {
      this.rearIndex++
      this.queue[this.rearIndex] = item
    }
  }

  /**
   * @description Removes an element from the front of a queue and returns it, ensuring
   * that the queue remains in a valid state.
   * 
   * @returns { T | undefined } an undefined value.
   */
  dequeue(): T | undefined {
    if (this.frontIndex == -1) {
      throw new Error('Queue is empty')
    }

    const item = this.queue[this.frontIndex]
    if (this.frontIndex == this.rearIndex) {
      this.frontIndex = -1
      this.rearIndex = -1
    } else if (this.frontIndex == this.size - 1) {
      this.frontIndex = 0
    } else {
      this.frontIndex++
    }

    return item
  }

  /**
   * @description Retrieves the front element of a queue without removing it, returning
   * `null` if the queue is empty and the current index is `-1`, otherwise returning
   * the front element.
   * 
   * @returns { T | null | undefined } the value stored at the front of the queue, or
   * `null` if the queue is empty.
   */
  peek(): T | null | undefined {
    if (this.frontIndex == -1) {
      return null
    }

    return this.queue[this.frontIndex]
  }

  /**
   * @description Checks if a vector is empty by checking if its `frontIndex` is equal
   * to `-1`. If it is, the function returns `true`, otherwise it returns `false`.
   * 
   * @returns { boolean } `true` if the list is empty, otherwise it is `false`.
   */
  isEmpty(): boolean {
    return this.frontIndex == -1
  }

  /**
   * @description Calculates the number of elements in a linked list, taking into account
   * the position of the first and last elements. It returns the total number of elements
   * including the gap between the front and rear elements.
   * 
   * @returns { number } the number of elements in the linked list, calculated based
   * on the indices of its head and tail nodes.
   */
  length(): number {
    if (this.frontIndex == -1) {
      return 0
    }

    if (this.rearIndex >= this.frontIndex) {
      return this.rearIndex - this.frontIndex + 1
    }

    return this.size - (this.frontIndex - this.rearIndex - 1)
  }
}
