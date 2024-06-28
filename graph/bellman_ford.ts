/**
 * @description Calculates shortest path between start node and all other nodes in a
 * graph by iteratively computing paths that consist of at most V nodes, using
 * Dijkstra's algorithm, and checking for negative weight cycles.
 * 
 * @param { [number, number][][] } graph - 2D grid of integers, where each integer
 * corresponds to a node in the graph, and the values between nodes represent the
 * weight of edges between them.
 * 
 * @param { number } start - starting node of the shortest path search, and it is
 * used to initialize the distances array with the distance of the start node set to
 * 0.
 * 
 * @returns { number[] | undefined } an array of shortest paths from the start node
 * to all other nodes in the graph, with infinity values indicating unreachable nodes.
 */
export const bellmanFord = (
  graph: [number, number][][],
  start: number
): number[] | undefined => {
  // We save the shortest distance to each node in `distances`. If a node is
  // unreachable from the start node, its distance is Infinity.
  const distances = Array(graph.length).fill(Infinity)
  distances[start] = 0

  // On the i'th iteration, we compute all shortest paths that consists of i+1
  // nodes. If we compute this V-1 times, we will have computed all simple
  // shortest paths in the graph because a shortest path has at most V nodes.
  for (let i = 0; i < graph.length - 1; ++i) {
    for (let node = 0; node < graph.length; ++node) {
      for (const [child, weight] of graph[node]) {
        const new_distance = distances[node] + weight
        if (new_distance < distances[child]) {
          distances[child] = new_distance
        }
      }
    }
  }

  // Look through all edges. If the shortest path to a destination node d is
  // larger than the distance to source node s and weight(s->d), then the path
  // to s must have a negative weight cycle.
  for (let node = 0; node < graph.length; ++node) {
    for (const [child, weight] of graph[node]) {
      if (distances[child] > distances[node] + weight) {
        return undefined
      }
    }
  }

  return distances
}
