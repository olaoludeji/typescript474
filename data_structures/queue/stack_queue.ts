/**
 * A Stack Based Queue Implementation.
 * The Queue data structure which follows the FIFO (First in First Out) rule.
 * The dequeue operation in a normal stack based queue would be o(n), as the entire has to be shifted
 * With the help of two stacks, the time complexity of this can be brought down to amortized-O(1).
 * Here, one stack acts as an Enqueue stack where elements are added.
 * The other stack acts as a dequeue stack which helps in dequeuing the elements
 */

import { Stack } from '../stack/stack'
import { Queue } from './queue'

export class StackQueue<T> implements Queue<T> {
  private enqueueStack: Stack<T> = new Stack<T>()
  private dequeueStack: Stack<T> = new Stack<T>()

  /**
   * @description Calculates the total length of the enqueued and dequeued items in a
   * stack by adding the lengths of both queues.
   * 
   * @returns { number } the sum of the lengths of the `enqueueStack` and `dequeueStack`.
   */
  length(): number {
    return this.enqueueStack.length() + this.dequeueStack.length()
  }

  /**
   * @description Verifies if both the enqueued and dequeued stacks are empty, returning
   * `true` if they are, and `false` otherwise.
   * 
   * @returns { boolean } a boolean indicating whether the stack is empty.
   */
  isEmpty(): boolean {
    return this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty()
  }

  /**
   * @description Adds an item to a stack, pushing it onto the end of the stack.
   * 
   * @param { T } item - data that is being added to the enqueued stack in the `enqueue()`
   * function.
   */
  enqueue(item: T): void {
    this.enqueueStack.push(item)
  }

  /**
   * @description Moves the last item from the `dequeueStack` to the top of the `enqueueStack`.
   */
  private shift(): void {
    while (!this.enqueueStack.isEmpty()) {
      const enqueueStackTop = this.enqueueStack.pop()
      this.dequeueStack.push(enqueueStackTop)
    }
  }

  /**
   * @description Retrieves and removes the front element from a queue, checking for
   * underflow or empty stack first.
   * 
   * @returns { T } a value removed from the queue.
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow')
    }

    if (this.dequeueStack.isEmpty()) {
      this.shift()
    }

    return this.dequeueStack.pop()
  }

  /**
   * @description Retrieves and returns the top item from a queue's dequeue stack, while
   * handling cases where the queue is empty or has no items left in the dequeue stack.
   * 
   * @returns { T | null } the top element of the dequeue stack.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null
    }

    if (this.dequeueStack.isEmpty()) {
      this.shift()
    }

    return this.dequeueStack.top()
  }
}
