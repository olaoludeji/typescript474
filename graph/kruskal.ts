import { DisjointSet } from '../data_structures/disjoint_set/disjoint_set'

/**
 * @description 1) joins sets and adds cheaper edges to a tree, 2) maintains an array
 * of edges in sorted order by weight for greedy construction, 3) checks if nodes A
 * and B are in different sets, then adds the edge (A, B), joins their sets, and
 * updates cost.
 * 
 * @param { Edge[] } edges - 2D network's edges, which are array of Edge objects that
 * contain the edge's weight and the vertex id of its endpoints.
 * 
 * @param { number } num_vertices - number of vertices or nodes in the graph for which
 * we are finding the minimum spanning tree.
 * 
 * @returns { [Edge[], number] } a pair of arrays containing the minimum spanning
 * tree and the total cost of the tree, respectively.
 */
export const kruskal = (
  edges: Edge[],
  num_vertices: number
): [Edge[], number] => {
  let cost = 0
  const minimum_spanning_tree = []

  // Use a disjoint set to quickly join sets and find if vertices live in different sets
  const sets = new DisjointSet(num_vertices)

  // Sort the edges in ascending order by weight so that we can greedily add cheaper edges to the tree
  edges.sort((a, b) => a.weight - b.weight)

  for (const edge of edges) {
    if (sets.find(edge.a) !== sets.find(edge.b)) {
      // Node A and B live in different sets. Add edge(a, b) to the tree and join the nodes' sets together.
      minimum_spanning_tree.push(edge)
      cost += edge.weight
      sets.join(edge.a, edge.b)
    }
  }

  return [minimum_spanning_tree, cost]
}

export class Edge {
  a: number = 0
  b: number = 0
  weight: number = 0
  /**
   * @description Establishes an object's properties with input values `a`, `b`, and `weight`.
   * 
   * @param { number } a - x-coordinate of the point to which the constructor is assigning
   * the properties of the object.
   * 
   * @param { number } b - second value that combines with the `a` parameter to determine
   * the object's weight.
   * 
   * @param { number } weight - mass of the object being constructed and is used to set
   * the object's mass.
   */
  constructor(a: number, b: number, weight: number) {
    this.a = a
    this.b = b
    this.weight = weight
  }
}
