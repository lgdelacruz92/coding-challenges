const a = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

const b = [
  [0, 0],
  [0, 0]
];

const countNode = grid => {
  // count nodes
  let nodeCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      nodeCount += 1;
    }
  }
  return nodeCount;
};

const validNeighbor = (location, m, n) => {
  // console.log(location);
  return (
    0 <= location[0] && location[0] < m && 0 <= location[1] && location[1] < n
  );
};

const markEdge = (graph, grid, neighbor, i, j) => {
  let node = grid[i].length * i + j;
  if (
    validNeighbor(neighbor, grid.length, grid[i].length) &&
    grid[neighbor[0]][neighbor[1]] === 0 &&
    grid[i][j] === 0
  ) {
    let neighborNode = grid[i].length * neighbor[0] + neighbor[1];
    graph[node][neighborNode] = 1;
  }
};

const buildGraph = (grid, nodeCount) => {
  let graph = [];
  for (let i = 0; i < nodeCount; i++) {
    let row = [];
    for (let j = 0; j < nodeCount; j++) {
      row.push(0);
    }
    graph.push(row);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // neighbors
      const top = [i - 1, j];
      const right = [i, j + 1];
      const bottom = [i + 1, j];
      const left = [i, j - 1];

      markEdge(graph, grid, top, i, j);
      markEdge(graph, grid, right, i, j);
      markEdge(graph, grid, bottom, i, j);
      markEdge(graph, grid, left, i, j);
    }
  }
  return graph;
};

const uniquePathsWithObstacles = grid => {
  const nodeCount = countNode(grid);
  const graph = buildGraph(grid, nodeCount);

  const visited = {};
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (
        visited[`${i}_${j}`] === undefined &&
        visited[`${j}_${i}`] === undefined
      ) {
        // not visited
        if (graph[i][j] === 1 && i !== j) {
          console.log("valid edge", i, j);
        }
        visited[`${i}_${j}`] = true;
        visited[`${j}_${i}`] = true;
      }
    }
  }
  // console.log(graph);
};

uniquePathsWithObstacles(b);
// buildGraph(a, 9);
