import { SinglyLinkedList } from '../list/singly_linked_list'

/**
 * This is an implementation of a stack, based on a linked list.
 * A stack is a linear data structure that works with the LIFO (Last-In-First-Out) principle.
 * A linked list is a linear data structure that works with the FIFO (First-In-First-Out) principle and uses references
 * to determine which element is next in the list.
 */
export class LinkedListStack<T> {
  private list: SinglyLinkedList<T>
  private limit: number

  /**
   * @description Initializes a `SinglyLinkedList` with a specified maximum size (`limit`)
   * and returns it.
   * 
   * @param { number } limit - maximum number of elements that can be stored in the
   * `list` object created by the constructor, with a default value of `Number.MAX_VALUE`.
   */
  constructor(limit: number = Number.MAX_VALUE) {
    this.list = new SinglyLinkedList<T>()
    this.limit = limit
  }

  /**
   * @description Returns the first item of an array or null if the array is empty.
   * 
   * @returns { T | null } the first item of its internal list.
   */
  top(): T | null {
    if (this.list.isEmpty()) {
      return null
    }

    return this.list.get(0)!
  }

  /**
   * @description Adds a value to an existing list if there is sufficient capacity left
   * and throws an error "Stack overflow" otherwise.
   * 
   * @param { T } data - value to be added to the stack.
   */
  push(data: T): void {
    if (this.list.getLength() + 1 > this.limit) {
      throw new Error('Stack overflow')
    }

    this.list.push(data)
  }

  /**
   * @description Removes the last item from a list and returns it.
   * 
   * @returns { T } the value of the item at the top of the stack.
   */
  pop(): T {
    if (this.list.isEmpty()) {
      throw new Error('Stack underflow')
    }

    return this.list.pop()
  }

  /**
   * @description Retrieves the number of elements in a given list.
   * 
   * @returns { number } the number of elements in the associated list.
   */
  length(): number {
    return this.list.getLength()
  }

  /**
   * @description Returns a boolean value indicating whether the list is empty or not,
   * based on the `list` object's `isEmpty` method.
   * 
   * @returns { boolean } a `boolean` value indicating whether the list is empty or not.
   */
  isEmpty(): boolean {
    return this.list.isEmpty()
  }
}
