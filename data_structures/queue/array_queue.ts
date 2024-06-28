/**
 * This is an array-based implementation of a Queue.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It means that the first element that was added to the queue will be the first one to be removed.
 * The time complexity of the operations is O(n).
 */
import { Queue } from './queue'
export class ArrayQueue<T> implements Queue<T> {
  private queue: T[] = []

  /**
   * @description Returns the number of elements in the `queue`.
   * 
   * @returns { number } the number of elements in the `queue`.
   */
  length(): number {
    return this.queue.length
  }

  /**
   * @description Checks whether the Queue is empty by returning true if its length is
   * 0 and false otherwise
   * 
   * @returns { boolean } a `boolean` indicating whether the `queue` is empty or not.
   */
  isEmpty(): boolean {
    return this.queue.length === 0
  }

  /**
   * @description Pushes an item onto a queue.
   * 
   * @param { T } item - element to be added to the queue.
   */
  enqueue(item: T): void {
    this.queue.push(item)
  }

  /**
   * @description Removes and returns the front element of a queue, checking for an
   * empty queue first.
   * 
   * @returns { T } the value of the front element of the queue, after removing it from
   * the queue.
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow')
    }

    return this.queue.shift() as T
  }

  /**
   * @description Retrieves the first element from a collection, while ensuring that
   * the collection is not empty. If the collection is empty, it returns `null`.
   * Otherwise, it returns the first element of the collection.
   * 
   * @returns { T | null } the first element of the queue if it is not empty, otherwise
   * null.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null
    }

    return this.queue[0]
  }
}
