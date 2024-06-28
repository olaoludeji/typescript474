/**
 * A heap is a complete binary tree
 * In a complete binary tree each level is filled before lower levels are added
 * Each level is filled from left to right
 *
 * In a (min|max) heap the value of every node is (less|greater) than that of its children
 *
 * The heap is often implemented using an array structure.
 * In the array implementation, the relationship between a parent index and its two children
 * are ((parentindex * 2) + 1) and ((parentindex * 2) + 2)
 */
export abstract class Heap<T> {
  protected heap: T[]
  // A comparison function. Returns true if a should be the parent of b.
  protected compare: (a: T, b: T) => boolean

  /**
   * @description Creates a new heap object and defines a comparison function for
   * ordering elements within the heap.
   * 
   * @param { (a: T, b: T) => boolean } compare - algorithmic comparison logic used to
   * determine whether an element should be inserted or removed from the heap data structure.
   */
  constructor(compare: (a: T, b: T) => boolean) {
    this.heap = []
    this.compare = compare
  }

  /**
   * @description Compares the value of a child node to that of its parent node in the
   * heap data structure, returning `true` if the child is placed below its parent and
   * `false` otherwise.
   * 
   * @param { number } childIndex - 0-based index of the child element in the heap,
   * which is used to determine the comparison outcome for the `return` statement.
   * 
   * @param { number } parentIndex - index of the parent node in the heap data structure,
   * which is used to compare the value of the child node with that of the parent node
   * in the `compare()` method.
   * 
   * @returns { boolean } a boolean value indicating whether the child node is properly
   * placed within its parent's index in the heap.
   */
  private isRightlyPlaced(childIndex: number, parentIndex: number): boolean {
    return this.compare(this.heap[parentIndex], this.heap[childIndex])
  }

  /**
   * @description Determines the index of the child to swap with the `leftChildIndex`
   * argument in order to maintain a heap structure according to the specified criteria.
   * 
   * @param { number } leftChildIndex - 0-based index of the left child node in the
   * binary heap.
   * 
   * @param { number } rightChildIndex - 16th index of the second child node to be
   * swapped with the left child node, in a binary heap data structure.
   * 
   * @returns { number } the index of the child to be swapped with the left child index.
   */
  private getChildIndexToSwap(
    leftChildIndex: number,
    rightChildIndex: number
  ): number {
    if (rightChildIndex >= this.size()) {
      return leftChildIndex
    }
    return this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])
      ? leftChildIndex
      : rightChildIndex
  }

  /**
   * @description Adds a value to the heap data structure and bubbles it up to maintain
   * the ordering property.
   * 
   * @param { T } value - data object to be stored in the heap and passed as an argument
   * to the `push` method.
   */
  public insert(value: T): void {
    this.heap.push(value)
    this.bubbleUp()
  }

  /**
   * @description Reduces the heap by extracting the largest element and moving it to
   * the end of the queue, then shrinking the heap by one size, and then recursively
   * applying the same process until there are no more elements in the queue.
   * 
   * @returns { T } the largest element in the heap, which is selected and returned
   * after some manipulations with the heap.
   */
  public extract(): T {
    const maxElement = this.heap[0]
    this.heap[0] = this.heap[this.size() - 1]
    this.heap.pop()
    this.sinkDown()
    return maxElement
  }

  /**
   * @description Returns the length of the internal heap array associated with the
   * SinglyLinkedList object, providing a direct measurement of its size.
   * 
   * @returns { number } the length of the heap array.
   */
  public size(): number {
    return this.heap.length
  }

  /**
   * @description Checks if the object is empty by checking its size against zero
   * 
   * @returns { boolean } a `boolean` indicating whether the collection is empty.
   */
  public isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * @description Exchanges the values stored in two locations, `a` and `b`, within an
   * array-based priority queue implementation known as a heap.
   * 
   * @param { number } a - 1st element of the swap operation, which is being swapped
   * with the second element represented by the `b` input parameter.
   * 
   * @param { number } b - 2nd element of the array being swapped.
   */
  protected swap(a: number, b: number): void {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  /**
   * @description Moves an element to its proper position in a circular array by
   * iteratively dividing the difference between the current element's index and its
   * parent's index by two until the element is at its correct position, then swapping
   * with its parent if necessary.
   * 
   * @param { number } index - 1-based position of the node to be swapped in the bubble
   * sort algorithm.
   */
  protected bubbleUp(index: number = this.size() - 1): void {
    let parentIndex

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2)
      if (this.isRightlyPlaced(index, parentIndex)) break
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  /**
   * @description Repeatedly swaps the position of a child node with its least appropriate
   * position, until the heap property is satisfied.
   */
  private sinkDown(): void {
    let index = 0
    let leftChildIndex = this.getLeftChildIndex(index)
    let rightChildIndex = this.getRightChildIndex(index)
    let childIndexToSwap

    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      childIndexToSwap = this.getChildIndexToSwap(
        leftChildIndex,
        rightChildIndex
      )
      if (this.isRightlyPlaced(childIndexToSwap, index)) break
      this.swap(childIndexToSwap, index)
      index = childIndexToSwap
      leftChildIndex = this.getLeftChildIndex(index)
      rightChildIndex = this.getRightChildIndex(index)
    }
  }

  /**
   * @description Computes the index of a element's left child within its parent array,
   * by multiplying the input `index` by 2 and adding 1.
   * 
   * @param { number } index - 0-based index of an element in the array for which the
   * left child index is being calculated, and it is used to calculate the left child
   * index through the formula `index * 2 + 1`.
   * 
   * @returns { number } the index of the left child node of a binary tree, calculated
   * as the product of the input index and 2 plus 1.
   */
  private getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }

  /**
   * @description Takes a single argument, `index`, and returns its product with 2
   * followed by an increment of 2. In other words, it returns `index * 2 + 2`.
   * 
   * @param { number } index - 0-based index of the right child node to which the
   * function should compute and return its index within the tree.
   * 
   * @returns { number } an integer value equal to the product of `index` multiplied
   * by 2 plus 2.
   */
  private getRightChildIndex(index: number): number {
    return index * 2 + 2
  }

  /**
   * @description Call the method `_check` on the receiver.
   */
  public check(): void {
    this._check()
  }

  /**
   * @description Verifies that a given index's children are properly placed within a
   * heap data structure, ensuring it adheres to the heap invariant. It recursively
   * checks the left and right child indices using the same function.
   * 
   * @param { number } index - 0-based index of the node being checked in the heap structure.
   */
  private _check(index: number = 0): void {
    if (!this.heap[index]) return
    const leftChildIndex = this.getLeftChildIndex(index)
    const rightChildIndex = this.getRightChildIndex(index)

    if (
      this.heap[leftChildIndex] &&
      !this.isRightlyPlaced(leftChildIndex, index)
    ) {
      throw new Error('Heap does not adhere to heap invariant')
    }

    if (
      this.heap[rightChildIndex] &&
      !this.isRightlyPlaced(rightChildIndex, index)
    ) {
      throw new Error('Heap does not adhere to heap invariant')
    }

    this._check(leftChildIndex)
    this._check(rightChildIndex)
  }
}

export class MinHeap<T> extends Heap<T> {
  /**
   * @description Sets up a class with a specified comparison function `compare`. The
   * `super` method calls the constructor of its superclass, and the comparison function
   * is set to the passed argument or a default value.
   * 
   * @param { (a: T, b: T) => boolean } compare - default comparison function to be
   * used when comparing elements of type `T`.
   */
  constructor(compare: (a: T, b: T) => boolean = (a: T, b: T) => a < b) {
    super(compare)
  }
}

export class MaxHeap<T> extends Heap<T> {
  /**
   * @description Creates an object that has a `super` property and a `compare` property,
   * which is a lambda expression that takes two arguments of type `T` and returns a
   * boolean value indicating whether the first argument is greater than the second.
   * 
   * @param { (a: T, b: T) => boolean } compare - default comparison operator used by
   * the `Super()` constructor when initializing a new object instance.
   */
  constructor(compare: (a: T, b: T) => boolean = (a: T, b: T) => a > b) {
    super(compare)
  }
}

export class PriorityQueue<T> extends MinHeap<T> {
  // Maps from the n'th node to its index within the heap.
  private keys: number[]
  // Maps from element to its index with keys.
  private keys_index: (a: T) => number

  /**
   * @description Defines a new instance of the `SortedSet` class, initializing its
   * internal arrays and setting the compare function to a default value.
   * 
   * @param { (a: T) => number } keys_index - 0-based index of each key in the array,
   * allowing for efficient lookup and comparison operations within the function.
   * 
   * @param { number } num_keys - number of unique values that are stored in the array
   * used to index the elements of the object, and is used by the constructor to
   * initialize the size of the internal array used for fast key Lookup.
   * 
   * @param { (a: T, b: T) => boolean } compare - comparator function that determines
   * whether two elements are equal or not, and it can be either a default comparator
   * function or a custom function provided by the caller.
   */
  constructor(
    keys_index: (a: T) => number,
    num_keys: number,
    compare: (a: T, b: T) => boolean = (a: T, b: T) => a < b
  ) {
    super(compare)
    this.keys = Array(num_keys).fill(-1)
    this.keys_index = keys_index
  }

  /**
   * @description Moves a element from position `a` to position `b`, updates the
   * corresponding indices in the `keys` array, and calls the superclass's `swap` method
   * with the updated positional arguments.
   * 
   * @param { number } a - 1st element to be swapped with the second element passed as
   * input to the function.
   * 
   * @param { number } b - 2nd element in the heap that is being swapped with the
   * corresponding element in the array.
   */
  protected swap(a: number, b: number): void {
    const akey = this.keys_index(this.heap[a])
    const bkey = this.keys_index(this.heap[b])
    ;[this.keys[akey], this.keys[bkey]] = [this.keys[bkey], this.keys[akey]]
    super.swap(a, b)
  }

  /**
   * @description Updates the internal array reference by storing a new value at the
   * index determined by `keys_index`, then calls the parent `super.insert` to insert
   * the value into the parent array.
   * 
   * @param { T } value - element to be inserted into the array and is assigned to the
   * `keys` property at the index specified by `this.keys_index(value)`.
   */
  public insert(value: T): void {
    this.keys[this.keys_index(value)] = this.size()
    super.insert(value)
  }

  /**
   * @description Unmarks the highest priority element and sets key to zero for the
   * last element in the heap, ensuring the heap property is maintained during extraction.
   * 
   * @returns { T } a reference to the extracted element of the heap.
   */
  public extract(): T {
    // Unmark the highest priority element and set key to zero for the last element in the heap.
    this.keys[this.keys_index(this.heap[0])] = -1
    if (this.size() > 1) {
      this.keys[this.keys_index(this.heap[this.size() - 1])] = 0
    }
    return super.extract()
  }

  /**
   * @description Modifies an existing value in a priority heap, increasing its priority
   * and bubbling it up the heap if necessary.
   * 
   * @param { number } idx - 0-based index of the key-value pair to be processed in the
   * heap data structure.
   * 
   * @param { T } value - item being inserted or updated in the priority heap, and is
   * used to determine the new priority of the element.
   */
  public increasePriority(idx: number, value: T): void {
    if (this.keys[idx] === -1) {
      // If the key does not exist, insert the value.
      this.insert(value)
      return
    }
    const key = this.keys[idx]
    if (this.compare(this.heap[key], value)) {
      // Do not do anything if the value in the heap already has a higher priority.
      return
    }
    // Increase the priority and bubble it up the heap.
    this.heap[key] = value
    this.bubbleUp(key)
  }
}
