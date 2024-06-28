// Compute the node priorities, which will be used to determine the order in which we perform transposed DFS.
/**
 * @description Evaluates the priorities of nodes in a graph by considering their
 * degree, proximity to already visited nodes, and stack position for efficient DFS
 * execution.
 * 
 * @param { number[][] } graph - 2D grid of nodes, where each position in the grid
 * contains an integer value representing the node's ID.
 * 
 * @param { boolean[] } visited - 𝜊𝐸 of nodes that have already been visited during
 * the depth-first search, serving as a indicator to avoid visiting previously explored
 * nodes again.
 * 
 * @param { number[] } stack - ordered list of nodes to be traversed next in the
 * depth-first search algorithm, with earlier traversals appearing at the top of the
 * stack and having lower priority.
 * 
 * @param { number } node - node for which the depth-first search is being performed,
 * and is used to determine the current node's priorities in the search.
 * 
 * @returns { unordered set or list of nodes } a priority queue of nodes that need
 * to be visited, sorted based on their distance from the starting node.
 * 
 * 	* The `stack` field represents the stack of nodes that need to be explored in
 * depth-first order. It is an array of unique integers, where each integer corresponds
 * to a node in the graph.
 * 	* The `visited` field indicates whether a node has been visited or not. It is a
 * boolean array with the same length as the `graph` field, where `visited[i]`
 * represents whether the i-th node in the graph has been visited.
 * 	* The `node` field contains the index of the current node being processed.
 * 
 * 	The `getNodePriorities` function first marks the current node as visited and then
 * explores its neighboring nodes in depth-first order, pushing each new node onto
 * the stack. The priority of each node is determined by its distance from the root
 * node, with nodes that are closer to the root having lower priority. This means
 * that the stack will contain the nodes in the correct order for visiting, based on
 * their distances from the root.
 */
const getNodePriorities = (
  graph: number[][],
  visited: boolean[],
  stack: number[],
  node: number
) => {
  if (visited[node]) {
    return
  }
  visited[node] = true

  for (const dest of graph[node]) {
    getNodePriorities(graph, visited, stack, dest)
  }
  // Nodes that end their DFS earlier are pushed onto the stack first and have lower priority.
  stack.push(node)
}

// Return the transpose of graph. The tranpose of a directed graph is a graph where each of the edges are flipped.
/**
 * @description Returns a new matrix that is a transposition of the given graph, where
 * each element of the original matrix is replaced by its corresponding position in
 * the transposed matrix.
 * 
 * @param { number[][] } graph - 2D array of integers, which is transformed into a
 * new 2D array where each element at position (i, j) contains the index of the
 * corresponding element in the original array.
 * 
 * @returns { number[][] } a new two-dimensional array, where each element in the
 * original array is now a row in the new array.
 */
const transpose = (graph: number[][]): number[][] => {
  const transposedGraph = Array(graph.length)
  for (let i = 0; i < graph.length; ++i) {
    transposedGraph[i] = []
  }

  for (let i = 0; i < graph.length; ++i) {
    for (let j = 0; j < graph[i].length; ++j) {
      transposedGraph[graph[i][j]].push(i)
    }
  }

  return transposedGraph
}

// Computes the SCC that contains the given node
/**
 * @description Determines the strongly connected components of a given graph by
 * iteratively exploring all possible paths from each node and updating a visited
 * bitmask and a list of discovered components.
 * 
 * @param { number[][] } graph - 2D matrix of adjacency data, containing integers
 * denoting the neighbors of each node in the graph.
 * 
 * @param { boolean[] } visited - boolean array that tracks if a node has been processed
 * or not in the recursive sCC algorithm.
 * 
 * @param { number } node - node being processed in the single-source shortest path
 * algorithm.
 * 
 * @param { number[] } scc - set of strongly connected components found by the algorithm
 * at the current node.
 * 
 * @returns { number } an array of unique shortest connected components (SCCs) of a
 * given graph.
 */
const gatherScc = (
  graph: number[][],
  visited: boolean[],
  node: number,
  scc: number[]
) => {
  if (visited[node]) {
    return
  }
  visited[node] = true
  scc.push(node)

  for (const dest of graph[node]) {
    gatherScc(graph, visited, dest, scc)
  }
}

/**
 * @description Performs graph partitioning and identifies the strongly connected
 * components (SCCs) of a given graph by iteratively visiting nodes and adding them
 * to an SCC array based on their transpose form.
 * 
 * @param { number[][] } graph - 2D graph to be searched for strongly connected
 * components (SCCs).
 * 
 * @returns { number[][] } an array of arrays, where each inner array represents a
 * strongly connected component of the input graph.
 */
export const kosajaru = (graph: number[][]): number[][] => {
  const visited = Array(graph.length).fill(false)

  const stack: number[] = []
  for (let i = 0; i < graph.length; ++i) {
    getNodePriorities(graph, visited, stack, i)
  }

  const transposedGraph = transpose(graph)

  const sccs = []
  visited.fill(false)
  for (let i = stack.length - 1; i >= 0; --i) {
    if (!visited[stack[i]]) {
      const scc: number[] = []
      gatherScc(transposedGraph, visited, stack[i], scc)
      sccs.push(scc)
    }
  }
  return sccs
}
