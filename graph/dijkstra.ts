import { MinHeap, PriorityQueue } from '../data_structures/heap/heap'
/**
 * @description Uses a priority queue to find the shortest distance between a starting
 * node and all other nodes in a graph, taking into account the weights of the
 * connections between nodes. It returns an array of distances from the start node
 * to each node in the graph.
 * 
 * @param { [number, number][][] } graph - 2D grid of vertices and edges, which is
 * used to compute the shortest distance from the starting vertex to all other vertices
 * in the graph.
 * 
 * @param { number } start - starting vertex for the shortest path calculation and
 * is used to initialize the priority queue with the distance of the start vertex.
 * 
 * @returns { number[] } an array of distances from the start node to all other nodes
 * in the graph, where each distance is represented as a number.
 */
export const dijkstra = (
  graph: [number, number][][],
  start: number
): number[] => {
  // We use a priority queue to make sure we always visit the closest node. The
  // queue makes comparisons based on path weights.
  /**
   * @description Selects and returns the first element of an array `a`.
   * 
   * @param { [number, number] } a - 1st element of an array passed to the function.
   * 
   * @returns { number } the first element of the `a` array passed to it.
   */
  /**
   * @description Compares two arrays `a` and `b` and returns `True` if the first element
   * of `a` is less than the first element of `b`, otherwise it returns `False`.
   * 
   * @param { [number, number] } a - 1st element of an array.
   * 
   * @param { [number, number] } b - 2nd number to be compared with the 1st number of
   * the `a` array for determining which number is smaller.
   * 
   * @returns { boolean } `true`.
   */
  const priorityQueue = new PriorityQueue(
    (a: [number, number]) => {
      return a[0]
    },
    graph.length,
    (a: [number, number], b: [number, number]) => {
      return a[1] < b[1]
    }
  )
  priorityQueue.insert([start, 0])
  // We save the shortest distance to each node in `distances`. If a node is
  // unreachable from the start node, its distance is Infinity.
  const distances = Array(graph.length).fill(Infinity)
  distances[start] = 0

  while (priorityQueue.size() > 0) {
    const [node, _] = priorityQueue.extract()
    graph[node].forEach(([child, weight]) => {
      const new_distance = distances[node] + weight
      if (new_distance < distances[child]) {
        // Found a new shortest path to child node. Record its distance and add child to the queue.
        // If the child already exists in the queue, the priority will be updated. This will make sure the queue will be at most size V (number of vertices).
        priorityQueue.increasePriority(child, [child, weight])
        distances[child] = new_distance
      }
    })
  }

  return distances
}
