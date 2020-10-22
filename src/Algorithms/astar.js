import { getDistance } from "./getDistance";

export function astar(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  let visitedNodesInOrder = [];
  startNode.distance = 0;
  let unvisitedNodes = getAllNodes(grid);
  while (unvisitedNodes.length) {
    // sortNodesByDistance(unvisitedNodes);

    let currentNode = closestNode(unvisitedNodes);
    // let closestNode = unvisitedNodes.shift();
    // If we encounter a wall, we skip it.
    if (closestNode.isWall) continue;
    // If the closest node is at a distance of infinity,
    // we must be trapped and should therefore stop.
    if (closestNode.distance === Infinity) return visitedNodesInOrder;
    currentNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateNeighbors(closestNode, grid);
  }
}
function closestNode(unvisitedNodes) {
  let currentClosest, index;
  for (let i = 0; i < unvisitedNodes.length; i++) {
    if (
      !currentClosest ||
      currentClosest.distance > unvisitedNodes[i].distance
    ) {
      currentClosest = unvisitedNodes[i];
      index = i;
    } else if (currentClosest.distance === unvisitedNodes[i].distance) {
      currentClosest = unvisitedNodes[i];
      index = i;
    }
  }
  unvisitedNodes.splice(index, 1);
  return currentClosest;
}

// function sortNodesByDistance(unvisitedNodes) {
//   unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
// }

function getAllNodes(grid) {
  let nodes = [];
  for (let row of grid) {
    for (let node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
function updateNode(currentNode, targetNode) {
  let distance = getDistance(currentNode, targetNode);
  let distanceToCompare = currentNode.distance + distance;
  if (distanceToCompare < targetNode.distance) {
    targetNode.distance = distanceToCompare;
    targetNode.previousNode = currentNode;
  }
}
function updateNeighbors(node, grid) {
  let neighbors = getNeighbors(node, grid);

  for (let neighbor of neighbors) {
    updateNode(node, neighbor);
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getNeighbors(node, grid) {
  let neighbors = [];
  let { col, row } = node;
  //up
  if (row > 0) {
    neighbors.push(grid[row - 1][col]);
  }
  //down
  if (row < grid.length - 1) {
    neighbors.push(grid[row + 1][col]);
  }
  //left
  if (col > 0) {
    neighbors.push(grid[row][col - 1]);
  }
  //right
  if (col < grid[0].length - 1) {
    neighbors.push(grid[row][col + 1]);
  }

  //diagonals

  //up-left diagonal
  if (row > 0 && col > 0) {
    neighbors.push(grid[row - 1][col - 1]);
  }
  //down-right diagonal
  if (row < grid.length - 1 && col < grid[0].length - 1) {
    neighbors.push(grid[row + 1][col + 1]);
  }
  //up-right
  if (row > 0 && col < grid[0].length - 1) {
    neighbors.push(grid[row - 1][col + 1]);
  }
  //down-left
  if (row < grid.length - 1 && col > 0) {
    neighbors.push(grid[row + 1][col - 1]);
  }

  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

export function getNodesInShortestPathOrder(finishNode) {
  let nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
