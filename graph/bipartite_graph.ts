/**
 * @description Determines whether a given node is a desired color in an undirected
 * graph based on a single source node and a color to assign. If the color at the
 * specified node is not 0, then the function compares the specified color with the
 * color at the node and returns true if they match, false otherwise. Otherwise, the
 * function assigns the specified color to the specified node and recursively checks
 * all neighboring nodes to ensure the desired color spreads throughout the graph.
 * 
 * @param { number[][] } graph - 2D grid of nodes and edges to be explored and colored.
 * 
 * @param { number[] } colors - 2D array of colors for each node in the graph, where
 * each element of the array corresponds to the color of a particular node.
 * 
 * @param { number } node - graph node for which the neighborhood needs to be found,
 * and it is used to identify the specific node that the function should operate on.
 * 
 * @param { number } color - color that will be assigned to the current node if it
 * is not already assigned a color or if it has been previously visited during the search.
 * 
 * @returns { boolean } a boolean value indicating whether the graph can be visited
 * using depth-first search.
 */
const dfs = (
  graph: number[][],
  colors: number[],
  node: number,
  color: number
): boolean => {
  if (colors[node] !== 0) {
    return colors[node] === color
  }

  colors[node] = color

  for (const neighbor of graph[node]) {
    if (!dfs(graph, colors, neighbor, -color)) {
      return false
    }
  }

  return true
}

/**
/**
 * @description Determines if a given graph is bipartite or not by iterating over all
 * vertices and checking if any neighboring pair has the same label. If such pair
 * exists, the function returns `false`, otherwise it returns `true`.
 * 
 * @param { number[][] } graph - 2D array of numbers that defines the graph to be
 * explored for reachability.
 * 
 * @returns { boolean } a boolean indicating whether the graph is bipartite or not.
 */
export const isBipartite = (graph: number[][]): boolean => {
  const n: number = graph.length
  const colors: number[] = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (colors[i] === 0 && !dfs(graph, colors, i, 1)) {
      return false
    }
  }

  return true
}
