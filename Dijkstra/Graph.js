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

module.exports = Graph;