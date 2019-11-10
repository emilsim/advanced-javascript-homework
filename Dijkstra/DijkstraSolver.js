const fs = require('fs');
class Graph {

  constructor(nodes) {
    this.nodes = nodes;
    this.costs = {};
    Object.keys(nodes).forEach(element => {
      this.costs[element] = Infinity;
    });
    this.costs[Object.keys(this.nodes)[0]] = 0;
    this.parents = {};
    this.visited = [];
  }

  addVisited(node) {
    this.visited.push(node);
  }

  getLowestCostNode() {
    return Object.keys(this.costs).reduce((lowest, node) => {
      if (lowest === null || this.costs[node] < this.costs[lowest]) {
        if (!this.visited.includes(node)) {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  }

  setCost(node, cost) {
    this.costs[node] = cost;
  }

  setParent(node, parent) {
    this.parents[node] = parent;
  }

  getNode(node) {
    return this.nodes[node];
  }

  getCost(node) {
    return this.costs[node];
  }

}


class DijkstraSolver {

  solve() {
    const inputGraph = this.readGraph();
    const graph = new Graph(inputGraph);
    let node = graph.getLowestCostNode();
    while (node) {
      let cost = graph.getCost(node);
      let children = graph.getNode(node);
      for (let n in children) {
        let newCost = cost + children[n];
        if (!graph.getCost(n) || graph.getCost(n) > newCost) {
          graph.setCost(n, newCost);
          graph.setParent(n, node);
        }
      }
      graph.addVisited(node);
      node = graph.getLowestCostNode();
    }
    console.log(graph.costs);
    console.log(graph.parents);
  }

  readGraph() {
    const graph = {
      S: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, F: 3 },
      D: { F: 1 },
      F: {}
    };
    const fileName = 'input.txt';
    const encoding = { encoding: 'uft-8' };

    return graph;
  }
}

const solver = new DijkstraSolver();
solver.solve();
