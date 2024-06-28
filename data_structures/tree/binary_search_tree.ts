/**
 * Represents a node of a binary search tree.
 *
 * @template T The type of the value stored in the node.
 */
class TreeNode<T> {
  /**
   * @description Initializes a new instance of the `TreeNode` class, providing an
   * object of type `T` and references to its left and right child nodes.
   * 
   * @param { T } data - data of a TreeNode class, which is passed to the constructor
   * as an object of type T.
   * 
   * @param { TreeNode<T> } leftChild - left child node of the root node.
   * 
   * @param { TreeNode<T> } rightChild - right child node of the tree data structure
   * being constructed, which can also be null.
   */
  constructor(
    public data: T,
    public leftChild?: TreeNode<T>,
    public rightChild?: TreeNode<T>
  ) {}
}

/**
 * An implementation of a binary search tree.
 *
 * A binary tree is a tree with only two children per node. A binary search tree on top sorts the children according
 * to following rules:
 * - left child < parent node
 * - right child > parent node
 * - all children on the left side < root node
 * - all children on the right side > root node
 *
 * For profound information about trees
 * @see https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/
 *
 * @template T The data type of the values in the binary tree.
 */
export class BinarySearchTree<T> {
  rootNode?: TreeNode<T>

  /**
   * @description Sets `rootNode` to `undefined`.
   */
  constructor() {
    this.rootNode = undefined
  }

  /**
   * @description Evaluates whether a graph has any nodes by checking if its root node
   * is undefined.
   * 
   * @returns { boolean } a `boolean` indicating whether the root node of the code's
   * documention is undefined.
   */
  isEmpty(): boolean {
    return this.rootNode === undefined
  }

  /**
   * @description Checks whether an element is present in a binary tree, defined by its
   * root node. It recursively navigates the tree until it finds the matching element
   * or determines that it is not present. If found, the function returns `true`,
   * otherwise it returns `false`.
   * 
   * @param { T } data - data that is being searched for in the binary tree.
   * 
   * @returns { boolean } a boolean indicating whether the provided data is present in
   * the tree.
   */
  has(data: T): boolean {
    if (!this.rootNode) {
      return false
    }

    let currentNode = this.rootNode
    while (currentNode.data !== data) {
      if (data > currentNode.data) {
        if (!currentNode.rightChild) {
          return false
        }

        currentNode = currentNode.rightChild
      } else {
        if (!currentNode.leftChild) {
          return false
        }

        currentNode = currentNode.leftChild
      }
    }

    return true
  }

  /**
   * @description Insert data into a binary tree by iteratively traversing the tree
   * from the root node and adjusting the node values accordingly.
   * 
   * @param { T } data - element to be inserted into the tree.
   */
  insert(data: T): void {
    if (!this.rootNode) {
      this.rootNode = new TreeNode<T>(data)
      return
    }

    let currentNode: TreeNode<T> = this.rootNode
    while (true) {
      if (data > currentNode.data) {
        if (currentNode.rightChild) {
          currentNode = currentNode.rightChild
        } else {
          currentNode.rightChild = new TreeNode<T>(data)
          return
        }
      } else {
        if (currentNode.leftChild) {
          currentNode = currentNode.leftChild
        } else {
          currentNode.leftChild = new TreeNode<T>(data)
          return
        }
      }
    }
  }

  /**
   * @description Recursively traverses a binary tree and returns the minimum value
   * present in the tree.
   * 
   * @returns { T } the minimum value stored in the root node of the given tree.
   */
  findMin(): T {
    if (!this.rootNode) {
      throw new Error('Empty tree.')
    }

    /**
     * @description Evaluates a given tree node recursively by returning either the value
     * of the node itself or the result of recursively calling `traverse` on its left
     * child node, if it exists.
     * 
     * @param { TreeNode<T> } node - root node of a binary tree, which is the starting
     * point for recursively traversing and retrieving its value.
     * 
     * @returns { T } the value of the root node's data if the `leftChild` node is null,
     * or the result of traversing the `leftChild` node and returning its value otherwise.
     */
    const traverse = (node: TreeNode<T>): T => {
      return !node.leftChild ? node.data : traverse(node.leftChild)
    }

    return traverse(this.rootNode)
  }

  /**
   * @description Traverses a tree data structure and returns the maximum value present
   * in the tree, using a recursive traversal to find the maximum value in the root
   * node and its descendants.
   * 
   * @returns { T } the maximum value in the given binary tree.
   */
  findMax(): T {
    if (!this.rootNode) {
      throw new Error('Empty tree.')
    }

    /**
     * @description Returns the value of a given node, recursively traversing its child
     * nodes. If the node has no right child, the function returns the node's data;
     * otherwise, it recursively calls itself on the right child and returns the result.
     * 
     * @param { TreeNode<T> } node - TreeNode object to be traversed.
     * 
     * @returns { T } the data stored in the current node or its child nodes after
     * recursively traversing them.
     */
    const traverse = (node: TreeNode<T>): T => {
      return !node.rightChild ? node.data : traverse(node.rightChild)
    }

    return traverse(this.rootNode)
  }

  /**
   * @description Performs an inorder traversal of a tree-like data structure, pushing
   * each node's data onto an array as it goes, and returning the traversed array.
   * 
   * @param { T[] } array - 1D array to be traversed and returned by the `inOrderTraversal`
   * function.
   * 
   * @returns { T[] } an array of values from the input array, sorted in a breadth-first
   * order starting with the root node.
   */
  inOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array
    }

    /**
     * @description Recursively traverses a tree data structure and appends its nodes to
     * an array.
     * 
     * @param { TreeNode<T> } node - current node in a binary tree being traversed.
     * 
     * @param { T[] } array - resulting sorted list that will be constructed and returned
     * by the function after traversing the given node and its children.
     * 
     * @returns { T[] } an array of nodes' data after traversing both left and right subtrees.
     */
    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array
      }

      traverse(node.leftChild, array)
      array.push(node.data)
      traverse(node.rightChild, array)
      return array
    }

    return traverse(this.rootNode)
  }

  /**
   * @description Recursively traverses a binary tree, adding each node's data to an
   * array, and then traversing the left and right subtrees and adding their nodes to
   * the array as well.
   * 
   * @param { T[] } array - returning value of the function, initialized to an empty
   * array at the beginning of the traversal process.
   * 
   * @returns { T[] } an array of the elements of the given tree, in the order they
   * appear in the tree.
   */
  preOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array
    }

    /**
     * @description Traverses a given tree and returns an updated array containing all
     * the data from the tree.
     * 
     * @param { TreeNode<T> } node - root node of a binary tree, and its value is used
     * to determine the elements to be added to the `array`.
     * 
     * @param { T[] } array - resulting data array after traversing the tree.
     * 
     * @returns { T[] } an array containing the data of all nodes in the tree.
     */
    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array
      }

      array.push(node.data)
      traverse(node.leftChild, array)
      traverse(node.rightChild, array)

      return array
    }

    return traverse(this.rootNode)
  }

  /**
   * Traverses to the binary search tree in post-order, i. e. it follow the schema of:
   * Left Node -> Right Node -> Root Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  postOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array
    }

    /**
     * @description Traverses the tree structure and adds all nodes and their children
     * to an existing array.
     * 
     * @param { TreeNode<T> } node - TreeNode object to be traversed and processed in the
     * given array.
     * 
     * @param { T[] } array - resulting list of nodes from the traverse process.
     * 
     * @returns { T[] } an array containing the data from the root node and its left and
     * right child nodes.
     */
    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array
      }

      traverse(node.leftChild, array)
      traverse(node.rightChild, array)
      array.push(node.data)

      return array
    }

    return traverse(this.rootNode)
  }
}
