const Graph = require('./Graph.js');
class DijkstraSolver {

    solve(inputGraph) {
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
}

module.exports = DijkstraSolver;