import { johnson } from '../johnson'

/**
 * @description Performs Johnstons algorithm for computing shortest paths in a weighted
 * graph, returning an array of arrays representing the shortest paths from each node
 * to every other node in the graph.
 * 
 * @returns { array } a strictly typed, passive voice, and formal representation of
 * the Johnson algorithm for determining the shortest paths in a graph.
 */
describe('johnson', () => {
  /**
   * @description Creates an array with `N` sub-arrays, each containing empty sub-arrays.
   * It returns a complete graph representation as an array of arrays.
   * 
   * @param { number } N - number of rows or vertices in the graph.
   * 
   * @returns { [number, number][][] } an array of arrays, where each inner array
   * represents a vertex in the graph.
   */
  const init_graph = (N: number): [number, number][][] => {
    const graph = Array(N)
    for (let i = 0; i < N; ++i) {
      graph[i] = []
    }
    return graph
  }

  /**
   * @description Adds an edge to a directed graph between two nodes represented by
   * their indices, maintaining the adjacency list representation.
   * 
   * @param { [number, number][][] } graph - 2D array of nodes and weights for the
   * graph, where each element of the array is a pair of node indices and edge weights.
   * 
   * @param { number } a - 0-based index of the node at which the function is called
   * and is used to push new edges onto the graph with weight `weight`.
   * 
   * @param { number } b - 2nd vertex in the edge being added to the graph.
   * 
   * @param { number } weight - 0-based weight of each edge between nodes in the graph,
   * which is used to update the adjacency list of the graph in the provided implementation.
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

    const expected = [
      [0, 4, 12, 19, 21, 11, 9, 8, 14],
      [4, 0, 8, 15, 22, 12, 12, 11, 10],
      [12, 8, 0, 7, 14, 4, 6, 7, 2],
      [19, 15, 7, 0, 9, 11, 13, 14, 9],
      [21, 22, 14, 9, 0, 10, 12, 13, 16],
      [11, 12, 4, 11, 10, 0, 2, 3, 6],
      [9, 12, 6, 13, 12, 2, 0, 1, 6],
      [8, 11, 7, 14, 13, 3, 1, 0, 7],
      [14, 10, 2, 9, 16, 6, 6, 7, 0]
    ]
    expect(johnson(graph)).toStrictEqual(expected)
  })

  it('should return the correct value for graph with negative weights', () => {
    const graph = init_graph(4)
    graph[0].push([1, -5])
    graph[0].push([2, 2])
    graph[0].push([3, 3])
    graph[1].push([2, 4])
    graph[2].push([3, 1])

    const expected = [
      [0, -5, -1, 0],
      [Infinity, 0, 4, 5],
      [Infinity, Infinity, 0, 1],
      [Infinity, Infinity, Infinity, 0]
    ]
    expect(johnson(graph)).toStrictEqual(expected)
  })

  it('should return the undefined for two node graph with negative-weight cycle', () => {
    const graph = init_graph(2)
    add_edge(graph, 0, 1, -1)
    expect(johnson(graph)).toStrictEqual(undefined)
  })

  it('should return the undefined for three node graph with negative-weight cycle', () => {
    const graph = init_graph(3)
    graph[0].push([1, -1])
    graph[0].push([2, 7])
    graph[1].push([2, -5])
    graph[2].push([0, 4])
    expect(johnson(graph)).toStrictEqual(undefined)
  })

  it('should return the correct value for zero element graph', () => {
    expect(johnson([])).toStrictEqual([])
  })

  it('should return the correct value for single element graph', () => {
    expect(johnson([[]])).toStrictEqual([[0]])
  })

  it('should return the correct value for a linear graph', () => {
    const linear_graph = init_graph(4)
    add_edge(linear_graph, 0, 1, 1)
    add_edge(linear_graph, 1, 2, 2)
    add_edge(linear_graph, 2, 3, 3)

    const expected = [
      [0, 1, 3, 6],
      [1, 0, 2, 5],
      [3, 2, 0, 3],
      [6, 5, 3, 0]
    ]
    expect(johnson(linear_graph)).toStrictEqual(expected)
  })

  it('should return the correct value for a linear graph with unreachable node', () => {
    const linear_graph = init_graph(3)
    add_edge(linear_graph, 0, 1, 1)

    const expected = [
      [0, 1, Infinity],
      [1, 0, Infinity],
      [Infinity, Infinity, 0]
    ]
    expect(johnson(linear_graph)).toStrictEqual(expected)
  })
})
