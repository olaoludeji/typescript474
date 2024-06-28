import { LinkedList } from './linked_list'

/**
 * This is an implementation of a Doubly Linked List.
 * A Doubly Linked List is a data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to the next and previous node (can be null).
 *
 * @see https://www.geeksforgeeks.org/doubly-linked-list/
 *
 * @template T The type of the value of the nodes.
 * @property head The head of the list.
 * @property tail The tail of the list.
 * @property length The length of the list.
 */
export class DoublyLinkedList<T> implements LinkedList<T> {
  private head?: DoublyLinkedListNode<T> = undefined
  private tail?: DoublyLinkedListNode<T> = undefined
  private length: number = 0

  /**
   * @description Checks if a linked list is empty by returning `true` if the head of
   * the list is null or not set, and `false` otherwise.
   * 
   * @returns { boolean } a boolean value indicating whether the list is empty or not.
   */
  isEmpty(): boolean {
    return !this.head
  }

  /**
   * @description Retrieves a value from a doubly linked list at a given index, returning
   * `null` if the index is out of bounds or the value cannot be found.
   * 
   * @param { number } index - 0-based index of the node within the Doubly Linked List
   * that the function should return, with values ranging from 0 to the length of the
   * list - 1.
   * 
   * @returns { T | null } the value of the node at the specified index, or `null` if
   * the index is out of range.
   */
  get(index: number): T | null {
    if (index < 0 || index >= this.length) {
      return null
    }

    let currentNode: DoublyLinkedListNode<T> | undefined = this.head
    for (let i: number = 0; i < index; i++) {
      currentNode = currentNode?.next
    }

    return currentNode?.value ?? null
  }

  /**
   * @description Adds a new node to a doubly linked list, updating the links between
   * nodes as necessary.
   * 
   * @param { T } value - value that is added to the list at the current position, and
   * it is used to initialize the newly created node's `value` field.
   */
  push(value: T): void {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
  }

  /**
   * @description Removes and returns the last node from a singly linked list, handling
   * edge cases such as an empty list or a list with only one node.
   * 
   * @returns { T } a value of type T.
   */
  pop(): T {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    const removedNode = this.head

    if (this.head === this.tail) {
      this.tail = undefined
    } else {
      this.head.next!.prev = undefined
    }

    this.head = this.head.next
    this.length--

    return removedNode.value
  }

  /**
   * @description Modifies a doubly linked list by adding a new node at the end,
   * maintaining proper linkage between nodes.
   * 
   * @param { T } value - value that is added to the end of the doubly linked list.
   */
  append(value: T): void {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
    }

    this.tail = newNode
    this.length++
  }

  /**
   * @description Removes the tail node of a linked list, updating the head and length
   * pointers accordingly.
   * 
   * @returns { T } a value reference of the removed node.
   */
  removeTail(): T {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    const removedNode = this.tail

    if (this.head === this.tail) {
      this.head = undefined
    } else {
      this.tail!.prev!.next = undefined
    }

    this.tail = this.tail!.prev
    this.length--

    return removedNode!.value
  }

  /**
   * @description Inserts an element at a given index in a doubly linked list, checking
   * the index for validity and adjusting the links between nodes accordingly.
   * 
   * @param { number } index - 0-based index of the position where the value should be
   * inserted in the Doubly Linked List.
   * 
   * @param { T } value - value that is added to the list at the specified index.
   */
  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds')
    }

    if (index === 0) {
      this.push(value)
      return
    }

    if (index === this.length) {
      this.append(value)
      return
    }

    const newNode = new DoublyLinkedListNode(value)
    let prevNode: DoublyLinkedListNode<T> | undefined = this.head
    for (let i: number = 0; i < index - 1; i++) {
      prevNode = prevNode?.next
    }
    const nextNode = prevNode?.next

    prevNode!.next = newNode
    newNode.prev = prevNode
    newNode.next = nextNode
    nextNode!.prev = newNode

    this.length++
  }

  /**
   * @description Removals an element from a doubly linked list at a specified index,
   * handling out-of-bounds indexes and removing the node from the list while maintaining
   * its linked structure.
   * 
   * @param { number } index - 0-based index of the node to be removed from the doubly
   * linked list.
   * 
   * @returns { T } a value of type `T`.
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

    let removedNode: DoublyLinkedListNode<T> | undefined = this.head
    for (let i: number = 0; i < index; i++) {
      removedNode = removedNode?.next
    }
    removedNode!.prev!.next = removedNode!.next
    removedNode!.next!.prev = removedNode!.prev

    this.length--

    return removedNode!.value
  }

  /**
   * @description Reverse the Doubly Linked List, maintaining the links between nodes.
   * It starts from the head node and moves towards the tail node, reversing the order
   * of nodes while maintaining their links. The function returns the modified list.
   * 
   * @returns { DoublyLinkedList<T> | null } a doubly linked list with all nodes reversed.
   */
  reverse(): DoublyLinkedList<T> | null {
    if (!this.head) {
      return null
    }

    let currentNode: DoublyLinkedListNode<T> | undefined = this.head
    let nextNode: DoublyLinkedListNode<T> | undefined = undefined
    let prevNode: DoublyLinkedListNode<T> | undefined = undefined

    while (currentNode) {
      nextNode = currentNode.next
      prevNode = currentNode.prev

      currentNode.next = prevNode
      currentNode.prev = nextNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }

  /**
   * @description Sets the `head`, `tail`, and `length` properties of a linked list to
   * `undefined`.
   */
  clear(): void {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  /**
   * @description Converts a doubly linked list to an array. It iterates through the
   * nodes of the list and pushes each node's value onto an array.
   * 
   * @returns { T[] } an array of the elements stored in the Doubly Linked List.
   */
  toArray(): T[] {
    const array: T[] = []

    let currentNode: DoublyLinkedListNode<T> | undefined = this.head

    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array
  }

  /**
   * @description Retrieves the length of its underlying string value.
   * 
   * @returns { number } the length of the current array object.
   */
  getLength(): number {
    return this.length
  }
}

/**
 * Represents a node in a doubly linked list.
 *
 * @template T The type of the value stored in the node.
 * @property value The value stored in the node.
 * @property next The next node after this node.
 * @property prev The previous node before this node.
 */
class DoublyLinkedListNode<T> {
  /**
   * @description Defines a class instance with initial value, next and previous nodes.
   * 
   * @param { T } value - data that will be stored as the node's value in the doubly
   * linked list.
   * 
   * @param { DoublyLinkedListNode<T> } next - node that comes after the current node
   * in the linked list.
   * 
   * @param { DoublyLinkedListNode<T> } prev - previous node in the linked list.
   */
  constructor(
    public value: T,
    public next?: DoublyLinkedListNode<T>,
    public prev?: DoublyLinkedListNode<T>
  ) {}
}
