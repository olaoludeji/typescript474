/**
 * @description Calculates the shortest path between all pairs of nodes in a weighted
 * graph using dynamic programming. It iteratively updates the shortest path matrix
 * by relaxing the paths to include additional nodes.
 * 
 * @param { number[][] } graph - 2D grid of an undirected weighted graph, where each
 * cell contains a number representing the edge weight between adjacent cells.
 * 
 * @returns { number[][] } an updated weighted adjacency matrix of the graph,
 * representing the shortest paths between all nodes.
 */
export const floydWarshall = (graph: number[][]): number[][] => {
  let distances = structuredClone(graph)
  const N = graph.length

  // We begin by setting the weighted adjacency matrix as the shortest paths.
  // For the k'th iteration, we try to relax the shortest paths by including node k in the path.
  for (let k = 0; k < N; ++k) {
    const newDistances = []
    for (let i = 0; i < N; ++i) {
      newDistances.push(Array(N).fill(Infinity))
    }

    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        // The shortest path from node i to j is the minimum of:
        // 1. the shortest path (i -> j) without node k
        // 2. the sum of the shortest path (i -> k) and (k -> j)
        newDistances[i][j] = Math.min(
          distances[i][j],
          distances[i][k] + distances[k][j]
        )
      }
    }
    distances = newDistances
  }

  return distances
}
