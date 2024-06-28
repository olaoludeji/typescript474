import { matrixMultiplication } from '../matrix_multiplication'

/**
 * @description Performs `it.each()` iterations over an array of arrays containing
 * matrices, and then multiplies each matrix with another matrix using the
 * `matrixMultiplication` function, which returns the expected result for each iteration.
 */
describe('Matrix-matrix multiplication', () => {
  it.each([
    [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [1, 2],
        [3, 4]
      ],
      [
        [7, 10],
        [15, 22]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [4, 3],
        [2, 1]
      ],
      [
        [8, 5],
        [20, 13]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [-1, 3],
        [2, -4]
      ],
      [
        [3, -5],
        [5, -7]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [[1, 2]],
      null
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ],
      null
    ]
  ])('Multiplying %j with %j should return %j', (matA, matB, expected) => {
    expect(matrixMultiplication(matA, matB)).toEqual(expected)
  })
})

/**
 * @description Is an iterator for testing matrix multiplication using `it.each`. It
 * provides input arrays `[matA, scalar, expected]` to a test case expecting the
 * result of multiplying `matA` by `scalar` to be equal to `expected`.
 */
describe('Matrix-scalar multiplication', () => {
  it.each([
    [
      [
        [1, 2],
        [3, 4]
      ],
      0,
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      1,
      [
        [1, 2],
        [3, 4]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      2,
      [
        [2, 4],
        [6, 8]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      -3,
      [
        [-3, -6],
        [-9, -12]
      ]
    ]
  ])('Multiplying %j with %i should return %j', (matA, scalar, expected) => {
    expect(matrixMultiplication(matA, scalar)).toEqual(expected)
  })
})

/**
 * @description Tests the `matrixMultiplication` function by providing different
 * inputs and expected outputs, using `it.each` to run the test for each combination
 * of input arrays.
 */
describe('Matrix-vector multiplication', () => {
  it.each([
    [
      [
        [1, 2],
        [3, 4]
      ],
      [1, 2],
      [5, 11]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [3, 4],
      [11, 25]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [-1, 0],
      [-1, -3]
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [1],
      null
    ],
    [
      [
        [1, 2],
        [3, 4]
      ],
      [1, 2, 3],
      null
    ]
  ])('Multiplying %j with %j should return %j', (matA, vector, expected) => {
    expect(matrixMultiplication(matA, vector)).toEqual(expected)
  })
})
