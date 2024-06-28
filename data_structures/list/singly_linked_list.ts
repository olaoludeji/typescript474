import { LinkedList } from './linked_list'

/**
 * Represents a node in a linked list.
 *
 * @template T The type of the data stored in the node.
 * @property data The data stored in the node.
 * @property next A reference to the next node in the list. Can reference to null, if there is no next element.
 */
class ListNode<T> {
  /**
   * @description Creates a new instance of the `ListNode` class with an initial element
   * and an optional next node.
   * 
   * @param { T } data - value that will be stored in the Node's value field.
   * 
   * @param { ListNode<T> } next - next list node in the list, providing a reference
   * to it for further traversal or manipulation within the function.
   */
  constructor(
    public data: T,
    public next?: ListNode<T>
  ) {}
}

/**
 * This is an implementation of a (singly) linked list.
 * A linked list is a data structure that stores each element with a pointer (or reference) to the next element
 * in the list. Therefore, it is a linear data structure, which can be resized dynamically during runtime, as there is
 * no fixed memory block allocated.
 *
 * @template T The type of the value of the nodes.
 * @property head The head of the list.
 * @property tail The tail of the list.
 * @property length The length of the list.
 */
export class SinglyLinkedList<T> implements LinkedList<T> {
  private head?: ListNode<T>
  private tail?: ListNode<T>
  private length: number

  /**
   * @description Sets `this.head`, `this.tail`, and `this.length` to `undefined`.
   */
  constructor() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  /**
   * @description Determines if a given list is empty by returning `true` if it has no
   * head and `false` otherwise.
   * 
   * @returns { boolean } a `boolean` indicating whether the linked list is empty or not.
   */
  isEmpty(): boolean {
    return !this.head
  }

  /**
   * @description Retrieves a value from a linked list at a specified index, returning
   * `null` if the index is out of bounds or the list is empty.
   * 
   * @param { number } index - position of the element to be retrieved in the list, and
   * it is used to determine whether the element exists in the list and to return its
   * value if it is found.
   * 
   * @returns { T | null } the data stored at the specified index in the list, or `null`
   * if the index is out of range or the list is empty.
   */
  get(index: number): T | null {
    if (index < 0 || index >= this.length) {
      return null
    }

    if (this.isEmpty()) {
      return null
    }

    let currentNode: ListNode<T> = this.head!
    for (let i: number = 0; i < index; i++) {
      if (!currentNode.next) {
        return null
      }

      currentNode = currentNode.next
    }

    return currentNode.data
  }

  /**
   * @description Adds a new element to a singly linked list. It creates a new `ListNode`
   * object and links it to the existing list head or tail, depending on whether the
   * list is empty or not. The length of the list is incremented.
   * 
   * @param { T } data - data that is being added to the list.
   */
  push(data: T): void {
    const node: ListNode<T> = new ListNode<T>(data)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++
  }

  /**
   * @description Removes the last element from a list and returns its value, handling
   * index out-of-bounds errors gracefully.
   * 
   * @returns { T } the value of the popped element from the linked list.
   */
  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Index out of bounds')
    }

    const node: ListNode<T> = this.head!
    this.head = this.head!.next
    this.length--

    return node.data
  }

  /**
   * @description Updates a singly linked list by adding an element to the end, maintaining
   * proper links with the existing nodes.
   * 
   * @param { T } data - value to be appended to the list.
   */
  append(data: T): void {
    const node: ListNode<T> = new ListNode<T>(data)

    if (this.isEmpty()) {
      this.head = node
    } else {
      this.tail!.next = node
    }

    this.tail = node
    this.length++
  }

  /**
   * @description Removes the tail node from a singly-linked list, checking for validity
   * of input and updating the linked list's length accordingly.
   * 
   * @returns { T } a value of type `T`, which is the data stored in the tail node of
   * the list.
   */
  removeTail(): T {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    const currentTail = this.tail
    if (this.head === this.tail) {
      this.head = undefined
      this.tail = undefined
      this.length--

      return currentTail!.data
    }

    let currentNode: ListNode<T> = this.head
    while (currentNode.next !== currentTail) {
      currentNode = currentNode.next!
    }

    this.tail = currentNode
    this.length--

    return currentTail!.data
  }

  /**
   * @description Inserts a new node into a linked list at a specified index, ensuring
   * that the index is within the range of the list's length and properly connecting
   * the new node to the existing nodes.
   * 
   * @param { number } index - position in the list where the new element should be inserted.
   * 
   * @param { T } data - element being inserted into the list at the specified index.
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds')
    }

    if (index === 0) {
      this.push(data)

      return
    }

    if (index === this.length) {
      this.append(data)

      return
    }

    const newNode = new ListNode<T>(data)
    let currentNode: ListNode<T> | undefined = this.head
    for (let i: number = 0; i < index - 1; i++) {
      currentNode = currentNode?.next
    }

    const nextNode = currentNode?.next
    currentNode!.next = newNode
    newNode.next = nextNode

    this.length++
  }

  /**
   * @description Removals an element at a given index in a linked list, handling edge
   * cases and updating the linked list's length accordingly.
   * 
   * @param { number } index - 0-based index of the node to be removed from the linked
   * list.
   * 
   * @returns { T } a reference to the removed node's data.
   */
  removeAt(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }

    if (index === 0) {
      return this.pop()
    }

    if (index === this.length - 1) {
      return this.removeTail()
    }

    let previousNode: ListNode<T> | undefined
    let currentNode: ListNode<T> | undefined = this.head
    for (let i: number = 0; i < index; i++) {
      if (i === index - 1) {
        previousNode = currentNode
      }

      currentNode = currentNode?.next
    }

    previousNode!.next = currentNode?.next
    this.length--

    return currentNode!.data
  }

  /**
   * @description Sets the `head`, `tail`, and `length` properties of the linked list
   * to `undefined`.
   */
  clear(): void {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  /**
   * @description Transforms a circular linked list into an array, appending each node's
   * data to the result array. It does not modify the original list.
   * 
   * @returns { T[] } an array of type `T`.
   */
  toArray(): T[] {
    const array: T[] = []
    let currentNode: ListNode<T> | undefined = this.head

    while (currentNode) {
      array.push(currentNode.data)
      currentNode = currentNode.next
    }

    return array
  }

  /**
   * @description Returns the length of an object.
   * 
   * @returns { number } the length of the object.
   */
  getLength(): number {
    return this.length
  }
}
