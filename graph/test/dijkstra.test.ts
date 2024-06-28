import { dijkstra } from '../dijkstra'

/**
 * @description Calculates the shortest path from a given starting node to all other
 * nodes in a weighted graph using Dijkstra's algorithm.
 * 
 * @returns { array } a list of integers representing the shortest path from the
 * starting node to all other nodes in the graph.
 */
describe('dijkstra', () => {
  /**
   * @description Initializes an array of arrays with the given size, returning a
   * two-dimensional array.
   * 
   * @param { number } N - dimensionality of the array to be generated, and it determines
   * the size of each dimension in the resulting array.
   * 
   * @returns { [number, number][][] } an array of arrays with length `N`, where each
   * inner array contains zero elements.
   */
  const init_graph = (N: number): [number, number][][] => {
    const graph = Array(N)
    for (let i = 0; i < N; ++i) {
      graph[i] = []
    }
    return graph
  }

  /**
   * @description Updates an adjacency matrix by adding an edge between two nodes with
   * given weights.
   * 
   * @param { [number, number][][] } graph - 2D matrix of links between nodes, which
   * is manipulated by pushing new edges onto it with the specified weights.
   * 
   * @param { number } a - node where the edge is added to the graph.
   * 
   * @param { number } b - 2nd vertex of the edge being added to the graph.
   * 
   * @param { number } weight - weight of each edge in the graph, which is used to
   * update the graph structure by adding new edges and modifying existing ones.
   */
  const add_edge = (
    graph: [number, number][][],
    a: number,
    b: number,
    weight: number
  ) => {
    graph[a].push([b, weight])
    graph[b].push([a, weight])
  }

  it('should return the correct value', () => {
    const graph = init_graph(9)
    add_edge(graph, 0, 1, 4)
    add_edge(graph, 0, 7, 8)
    add_edge(graph, 1, 2, 8)
    add_edge(graph, 1, 7, 11)
    add_edge(graph, 2, 3, 7)
    add_edge(graph, 2, 5, 4)
    add_edge(graph, 2, 8, 2)
    add_edge(graph, 3, 4, 9)
    add_edge(graph, 3, 5, 14)
    add_edge(graph, 4, 5, 10)
    add_edge(graph, 5, 6, 2)
    add_edge(graph, 6, 7, 1)
    add_edge(graph, 6, 8, 6)
    add_edge(graph, 7, 8, 7)
    expect(dijkstra(graph, 0)).toStrictEqual([0, 4, 12, 19, 21, 11, 9, 8, 14])
  })

  it('should return the correct value for single element graph', () => {
    expect(dijkstra([[]], 0)).toStrictEqual([0])
  })

  const linear_graph = init_graph(4)
  add_edge(linear_graph, 0, 1, 1)
  add_edge(linear_graph, 1, 2, 2)
  add_edge(linear_graph, 2, 3, 3)
  test.each([
    [0, [0, 1, 3, 6]],
    [1, [1, 0, 2, 5]],
    [2, [3, 2, 0, 3]],
    [3, [6, 5, 3, 0]]
  ])(
    'correct result for linear graph with source node %i',
    (source, result) => {
      expect(dijkstra(linear_graph, source)).toStrictEqual(result)
    }
  )

  const unreachable_graph = init_graph(3)
  add_edge(unreachable_graph, 0, 1, 1)
  test.each([
    [0, [0, 1, Infinity]],
    [1, [1, 0, Infinity]],
    [2, [Infinity, Infinity, 0]]
  ])(
    'correct result for graph with unreachable nodes with source node %i',
    (source, result) => {
      expect(dijkstra(unreachable_graph, source)).toStrictEqual(result)
    }
  )
})
