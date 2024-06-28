import { bellmanFord } from './bellman_ford'
import { dijkstra } from './dijkstra'

/**
 * @description Takes a graph and returns an array of arrays, where each inner array
 * represents a shortest path from the new node to all other nodes in the graph. It
 * first creates a copy of the original graph, adds a new node with no edges, computes
 * distances using Bellman-Ford, adjusts edge weights, and then computes Dijkstra's
 * shortest paths for each node.
 * 
 * @param { [number, number][][] } graph - 2D graph, which is a 2D matrix of weighted
 * edges between nodes, and the function computes distances from a new node to all
 * existing nodes using the Bellman-Ford algorithm and then returns shortest paths
 * from the new node to all other nodes in the graph.
 * 
 * @returns { number[][] | undefined } an array of shortest paths between all pairs
 * of nodes in a weighted graph.
 */
export const johnson = (
  graph: [number, number][][]
): number[][] | undefined => {
  const N = graph.length

  // Add a new node and 0 weighted edges from the new node to all existing nodes.
  const newNodeGraph = structuredClone(graph)
  const newNode: [number, number][] = []
  for (let i = 0; i < N; ++i) {
    newNode.push([i, 0])
  }
  newNodeGraph.push(newNode)

  // Compute distances from the new node to existing nodes using the Bellman-Ford algorithm.
  const adjustedGraph = bellmanFord(newNodeGraph, N)
  if (adjustedGraph === undefined) {
    // Found a negative weight cycle.
    return undefined
  }

  for (let i = 0; i < N; ++i) {
    for (const edge of graph[i]) {
      // Adjust edge weights using the Bellman Ford output weights. This ensure that:
      // 1. Each weight is non-negative. This is required for the Dijkstra algorithm.
      // 2. The shortest path from node i to node j consists of the same nodes with or without adjustment.
      edge[1] += adjustedGraph[i] - adjustedGraph[edge[0]]
    }
  }

  const shortestPaths: number[][] = []
  for (let i = 0; i < N; ++i) {
    // Compute Dijkstra weights for each node and re-adjust weights to their original values.
    const dijkstraShorestPaths = dijkstra(graph, i)
    for (let j = 0; j < N; ++j) {
      dijkstraShorestPaths[j] += adjustedGraph[j] - adjustedGraph[i]
    }
    shortestPaths.push(dijkstraShorestPaths)
  }
  return shortestPaths
}
