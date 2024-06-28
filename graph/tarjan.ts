/**
 * @description Traverses a graph using Depth-First Search (DFS). It maintains
 * discovery, low, and stack variables to identify strongly connected components
 * (SCCs) by recursively exploring the graph from the starting node. The function
 * returns an array of SCCs, each consisting of nodes and their ancestors.
 * 
 * @param { number[][] } graph - 2D array of nodes and edges to be traversed and
 * grouped into strong connected components (SCCs) by the `dfs` function.
 * 
 * @returns { number[][] } an array of arrays, where each inner array represents a
 * strongly connected component (SCC) of the input graph.
 */
export const tarjan = (graph: number[][]): number[][] => {
  if (graph.length === 0) {
    return []
  }

  let index = 0
  // The order in which we discover nodes
  const discovery: number[] = Array(graph.length)
  // For each node, holds the furthest ancestor it can reach
  const low: number[] = Array(graph.length).fill(undefined)
  // Holds the nodes we have visited in a DFS traversal and are considering to group into a SCC
  const stack: number[] = []
  // Holds the elements in the stack.
  const stackContains = Array(graph.length).fill(false)
  const sccs: number[][] = []

  /**
   * @description Explores a directed graph from a given node by traversing its neighbors,
   * updates low and discovery values for each node, and detects if a node is a root
   * of a strong connected component (SCC). It also gathers SCCs found during the exploration.
   * 
   * @param { number } node - current node being processed in the depth-first search,
   * and its value is used to update the `low` and `discovery` arrays, as well as to
   * determine if the node is the root of a separate connected component (SCC) during
   * the recursive traversal.
   */
  const dfs = (node: number) => {
    discovery[node] = index
    low[node] = index
    ++index
    stack.push(node)
    stackContains[node] = true

    for (const child of graph[node]) {
      if (low[child] === undefined) {
        dfs(child)
        if (low[child] < low[node]) {
          // Child node loops back to this node's ancestor. Update the low node.
          low[node] = low[child]
        }
      } else if (stackContains[child] && low[node] > discovery[child]) {
        // Found a backedge. Update the low for this node if needed.
        low[node] = discovery[child]
      }
    }

    if (discovery[node] == low[node]) {
      // node is the root of a SCC. Gather the SCC's nodes from the stack.
      const scc: number[] = []
      let i
      for (i = stack.length - 1; stack[i] != node; --i) {
        scc.push(stack[i])
        stackContains[stack[i]] = false
        stack.pop()
      }
      scc.push(stack[i])
      stackContains[stack[i]] = false
      stack.pop()
      sccs.push(scc)
    }
  }

  for (let i = 0; i < graph.length; ++i) {
    if (low[i] === undefined) {
      dfs(i)
    }
  }
  return sccs
}
