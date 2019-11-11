const fs = require('fs');
const DijkstraSolver = require('./DijkstraSolver');

const solver = new DijkstraSolver();
readGraph();

function readGraph(config = 'utf-8') {
  let graph = {};
  const fileName = 'homework/Dijkstra/input.txt';
  fs.readFile(fileName, { encoding: config }, (err, data) => {
    if (err) { console.error(err); return; }
    data.split('\n').forEach(el => {
      let [vertex, edges] = el.split(' ');
      let edgesObj = {};
      if (edges !== undefined) {
        edges.split(',').forEach(e => {
          let [toVertex, weight] = e.split(':');
          edgesObj[toVertex] = +weight;
        })
      }
      graph[vertex] = edgesObj;
    });
    solver.solve(graph);
  })
}
