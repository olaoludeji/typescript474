/* Stack data-structure. It's work is based on the LIFO method (last-IN-first-OUT).
 * It means that elements added to the stack are placed on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, it pops from the stack.
 * This is a class-based implementation of a Stack.
 */
export class Stack<T> {
  private stack: T[] = []
  private limit: number

  /**
   * @description Sets a limit value for the object instance, which is passed as an
   * argument and stored in the `limit` property.
   * 
   * @param { number } limit - maximum value that can be assigned to the `limit` instance
   * variable in the constructor.
   */
  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit
  }

  /**
   * @description Pushes a value onto a stack, ignoring any existing capacity limits.
   * If the stack exceeds its capacity, an error is thrown.
   * 
   * @param { T } value - element being added to the stack.
   */
  push(value: T) {
    if (this.length() + 1 > this.limit) {
      throw new Error('Stack Overflow')
    }

    this.stack.push(value)
  }

  /**
   * @description Retrieves and removes the top element from a stack, returning its
   * value. If the stack is empty, an `Error` is thrown.
   * 
   * @returns { T } the popped value from the stack.
   */
  pop(): T {
    if (this.length() !== 0) {
      return this.stack.pop() as T
    }

    throw new Error('Stack Underflow')
  }

  /**
   * @description Retrieves the number of elements present in an array by referencing
   * the internal `stack` property of the given object.
   * 
   * @returns { number } the number of elements in the stack.
   */
  length(): number {
    return this.stack.length
  }

  /**
   * @description Checks if a string has zero length by comparing its length property
   * to 0. If they match, the function returns true indicating the string is empty;
   * otherwise, it returns false.
   * 
   * @returns { boolean } `true` when the length of the given object is equal to zero,
   * and `false` otherwise.
   */
  isEmpty(): boolean {
    return this.length() === 0
  }

  /**
   * @description Returns the top element (i.e., the last one added to the stack) or
   * `null`, if the stack is empty.
   * 
   * @returns { T | null } the value stored at the top of the stack, or `null` if the
   * stack is empty.
   */
  top(): T | null {
    if (this.length() !== 0) {
      return this.stack[this.length() - 1]
    }

    return null
  }
}
