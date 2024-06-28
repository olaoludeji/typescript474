import { PriorityQueue } from '../data_structures/heap/heap'
/**
 * @description Generates a minimum spanning tree for an undirected graph and returns
 * it as an array of edges and the total weight of the tree.
 * 
 * @param { [number, number][][] } graph - 2D graph consisting of edges and vertices,
 * which is used to calculate the minimum spanning tree of the graph.
 * 
 * @returns { [Edge[], number] } a pair of values: an array of edges that form a
 * minimum spanning tree and the total weight of the tree.
 */
export const prim = (graph: [number, number][][]): [Edge[], number] => {
  if (graph.length == 0) {
    return [[], 0]
  }
  const minimum_spanning_tree: Edge[] = []
  let total_weight = 0

  /**
   * @description Takes a `b` argument and returns it directly.
   * 
   * @param { Edge } e - edge of a shape.
   * 
   * @returns { boolean } `b`.
   */
  /**
   * @description Compares the `weight` properties of two objects `a` and `b`, and
   * returns `true` if `a.weight` is less than `b.weight`, otherwise returns `false`.
   * 
   * @param { Edge } a - first object in the comparison.
   * 
   * @param { Edge } b - 2nd element of the array to compare the weight of.
   * 
   * @returns { number } a boolean value indicating whether `a.weight` is less than `b.weight`.
   */
  const priorityQueue = new PriorityQueue(
    (e: Edge) => {
      return e.b
    },
    graph.length,
    (a: Edge, b: Edge) => {
      return a.weight < b.weight
    }
  )
  const visited = new Set<number>()

  // Start from the 0'th node. For fully connected graphs, we can start from any node and still produce the MST.
  visited.add(0)
  add_children(graph, priorityQueue, 0)

  while (!priorityQueue.isEmpty()) {
    // We have already visited vertex `edge.a`. If we have not visited `edge.b` yet, we add its outgoing edges to the PriorityQueue.
    const edge = priorityQueue.extract()
    if (visited.has(edge.b)) {
      continue
    }
    minimum_spanning_tree.push(edge)
    total_weight += edge.weight
    visited.add(edge.b)
    add_children(graph, priorityQueue, edge.b)
  }

  return [minimum_spanning_tree, total_weight]
}

/**
 * @description Iterates through the children of a given node in a graph, increasing
 * the priority of each edge leading to a neighboring node in the queue to ensure it
 * is only added once.
 * 
 * @param { [number, number][][] } graph - 2D graph consisting of nodes and edges,
 * where each node is associated with an array of adjacent edges, and the function
 * processes each node's adjacency list once to generate the priority queue.
 * 
 * @param { PriorityQueue<Edge> } priorityQueue - queue of edges to be processed, and
 * it is used to prioritize the edges based on their weights to ensure that each
 * vertex is visited only once during the shortest path computation.
 * 
 * @param { number } node - node for which the neighboring vertices are to be found.
 */
const add_children = (
  graph: [number, number][][],
  priorityQueue: PriorityQueue<Edge>,
  node: number
) => {
  for (let i = 0; i < graph[node].length; ++i) {
    const out_edge = graph[node][i]
    // By increasing the priority, we ensure we only add each vertex to the queue one time, and the queue will be at most size V.
    priorityQueue.increasePriority(
      out_edge[0],
      new Edge(node, out_edge[0], out_edge[1])
    )
  }
}

export class Edge {
  a: number = 0
  b: number = 0
  weight: number = 0
  /**
   * @description Initializes an object with `a`, `b`, and `weight` properties, assigning
   * values to each property from the function arguments.
   * 
   * @param { number } a - initial value of the object's `a` field.
   * 
   * @param { number } b - 2nd input value to the constructor function.
   * 
   * @param { number } weight - mass of the object being constructed and is used in the
   * calculation of the object's total mass.
   */
  constructor(a: number, b: number, weight: number) {
    this.a = a
    this.b = b
    this.weight = weight
  }
}
