import { DoublyLinkedList } from '../doubly_linked_list'
import { testLinkedList } from './linked_list'

/**
 * @description TestLinkedList implements unit tests for a `DoublyLinkedList` class
 * by providing input values, calling its `reverse()` method, and asserting the results
 * using `expect()`.
 */
describe('DoublyLinkedList', () => {
  testLinkedList(DoublyLinkedList)

  it('should reverse the list', () => {
    const list: DoublyLinkedList<number> = new DoublyLinkedList<number>()

    list.append(1)
    list.append(2)
    list.append(3)
    list.reverse()

    expect(list.get(0)).toBe(3)
    expect(list.get(1)).toBe(2)
  })

  it('should return null for reverse when list is empty', () => {
    const list: DoublyLinkedList<number> = new DoublyLinkedList<number>()

    expect(list.reverse()).toBeNull()
  })
})
