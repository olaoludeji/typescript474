/**
 * @author : tamaf96<https://github.com/tamaf96>
 * @description
 *  Tree Sort sorts a list by building a binary search tree and traversing it.
 * @param {T[]} arr - Array of comparable items
 * @return {T[]} - The sorted Array.
 * @see <https://en.wikipedia.org/wiki/Tree_sort>
 */

import { BinarySearchTree } from '../data_structures/tree/binary_search_tree'

/**
 * @description Creates a new `BinarySearchTree` from an array of values, inserts
 * each value into the tree, and then returns the tree's in-order traversal as a new
 * array.
 * 
 * @param { T[] } arr - array of elements to be added to and searched in the binary
 * search tree constructed by the function.
 * 
 * @returns { T[] } a sorted array of the original input elements, represented as a
 * Binary Search Tree.
 */
export const treeSort = <T>(arr: T[]): T[] => {
  const searchTree = new BinarySearchTree<T>()
  for (const item of arr) {
    searchTree.insert(item)
  }
  return searchTree.inOrderTraversal()
}
