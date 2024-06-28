import { Queue } from './queue'

type Node<T> = {
  value: T
  next?: Node<T>
}

/**
 * This is a LinkedList-like implementation of a Queue,
 * allowing the operations to be implemented in constant time.
 * A Queue is a data structure that follows the FIFO (First-In First-Out) principle:
 * The first element that was added to the queue will be the first one to be removed.
 */
export class LinkedQueue<T> implements Queue<T> {
  public size: number
  public head?: Node<T>
  private tail?: Node<T>

  /**
   * @description Sets `head`, `tail`, and `size` to `undefined`.
   */
  constructor() {
    this.head = this.tail = undefined
    this.size = 0
  }

  /**
   * @description Updates a queue by adding an item to its end and assigning the new
   * tail pointer to the node created.
   * 
   * @param { T } item - value to be enqueued in the queue.
   */
  enqueue(item: T): void {
    const node = { value: item } as Node<T> // Creates a new node
    this.size++ // Increase the length of the Queue

    if (!this.tail) {
      this.tail = this.head = node
      return
    }
    this.tail.next = node // Updates  the next tail to the node created
    this.tail = node // The tail of the Queue then becomes the node created!!
  }

  /**
   * @description Retrieves and returns the value stored at the front of a queue while
   * also updating the size of the queue and the head pointer to the next node.
   * 
   * @returns { T | undefined } the value of the head node of the queue.
   */
  dequeue(): T | undefined {
    if (!this.head) {
      throw new Error('Queue Underflow')
    }

    this.size--
    const head = this.head // We store the head in order not to lose track of it
    this.head = this.head.next // Update the the head to the next node
    return head.value // Return the value of the head
  }

  /**
   * @description Retrieves and returns the value associated with the head of a given
   * Linked List, while checking if the list is empty or the head is null first.
   * 
   * @returns { T | undefined | null } the value of the head element of a collection,
   * or `undefined` if the collection is empty.
   */
  peek(): T | undefined | null {
    if (this.isEmpty()) {
      return null
    }
    return this.head?.value
  }

  /**
   * @description Evaluates if an object has no properties or a size of 0. It returns
   * `true` when the size is 0 and `false` otherwise.
   * 
   * @returns { boolean } a `boolean` value indicating whether the collection is empty
   * or not.
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * @description Returns the number of elements in the array represented by the object.
   * 
   * @returns { number } the size of the object.
   */
  length(): number {
    return this.size
  }
}
