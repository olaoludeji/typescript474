/**
 * Represents a node in a Trie data structure.
 */
class TrieNode {
  /**
   * An object that stores child nodes for each character in the alphabet.
   */
  children: { [key: string]: TrieNode } = {}

  /**
   * Indicates whether the node represents the end of a word.
   */
  isWord: boolean = false
}

/**
 * Trie Data structure for storing and searching words.
 */
export class Trie {
  /**
   * The root node of the Trie.
   */
  root: TrieNode = new TrieNode()

  /**
   * Creates a new Trie instance.
   */
  constructor() {}

  /**
   * @description Takes a `TrieNode` and a `string` parameter, and adds the characters
   * of the `string` to the `TrieNode`. If a character does not exist in the `TrieNode`,
   * a new `TrieNode` is created for that character and added to the `TrieNode`. The
   * function then marks the `TrieNode` as a word.
   * 
   * @param { TrieNode } node - TrieNode to be updated with the given word.
   * 
   * @param { string } word - word to be inserted into the trie data structure and is
   * used to determine the corresponding node to be created or updated in the trie.
   */
  private insertNode(node: TrieNode, word: string): void {
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isWord = true
  }

  /**
   * @description Searches for a specific word within the trie data structure, returning
   * `true` if found and `false` otherwise, based on the provided `word` and `isPrefixMatch`.
   * 
   * @param { string } word - search query for which the function will look for a match
   * within the code's root node or its subtrees.
   * 
   * @param { boolean } isPrefixMatch - prefix match of the input word to the current
   * node's value or children's values, which is used to shorten the search process
   * when looking up words in the dictionary.
   * 
   * @returns { boolean } a boolean value indicating whether the given word can be found
   * in the tree.
   */
  public find(word: string, isPrefixMatch: boolean = false): boolean {
    return this.searchNode(this.root, word, isPrefixMatch)
  }

  /**
   * @description Modifies the existing root node by adding a new child node representing
   * the input string `word`.
   * 
   * @param { string } word - string that will be inserted as a new node into the tree
   * data structure.
   * 
   * @returns { this } a reference to the newly added node.
   */
  public add(word: string): this {
    this.insertNode(this.root, word)
    return this
  }

  /**
   * @description Searches a trie data structure for a given word. It iterates through
   * the characters of the input word and returns true if a prefix match is found or
   * false otherwise.
   * 
   * @param { TrieNode } node - current TrieNode being searched in the given word.
   * 
   * @param { string } word - word to search for, and it is used to determine if the
   * `node` argument is a prefix of the word.
   * 
   * @param { boolean } prefixMatch - whether or not the given word is a
   * prefix of the current node's label.
   * 
   * @returns { boolean } a boolean value indicating whether a word exists in the given
   * TrieNode structure based on the provided word and prefix match condition.
   */
  private searchNode(
    node: TrieNode,
    word: string,
    prefixMatch: boolean
  ): boolean {
    for (const char of word) {
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return prefixMatch || node.isWord
  }
}
