export default class Knight {
    constructor() {
        this.knightMoveRules = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2],
        ];
        this.graphMoves = this.genGraph();
    }
    genGraph() {
        const graph = {};
        for (let x = 0; x <= 7; x++) {
            for (let y = 0; y <= 7; y++) {
                this.knightMoveRules.forEach((direction) => {
                    const move = [x + direction[0], y + direction[1]];
                    if (
                        move[0] > 7 ||
                        move[0] < 0 ||
                        move[1] > 7 ||
                        move[1] < 0
                    )
                        return;

                    if (graph[`${x},${y}`] === undefined)
                        graph[`${x},${y}`] = [];

                    graph[`${x},${y}`].push(move);
                });
            }
        }
        return graph;
    }

    shortestPath(start = [0, 0], end = [7, 7]) {
        let queue = [start];
        const alreadyVisited = [];
        const prepaths = [];

        while (queue.length > 0) {
            const current = queue.shift();
            alreadyVisited.push(current);
            const currentConnections = this.graphMoves[current.toString()];

            for (const item of currentConnections) {
                if (
                    !arrayIncludesArray(alreadyVisited, item) &&
                    !arrayIncludesArray(queue, item)
                ) {
                    prepaths.push([current, item]);
                    queue.push(item);
                    if (arraysAreEqual(item, end)) {
                        queue = [];
                        break;
                    }
                }
            }
        }

        queue = [end];
        const path = [];
        while (queue.length > 0) {
            const current = queue.shift();
            for (const prepath of prepaths) {
                if (arraysAreEqual(prepath[1], current)) {
                    queue.push(prepath[0]);
                    path.push(prepath[1]);
                }
            }
        }
        path.push(start);

        return path.reverse();
    }
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
function arrayIncludesArray(parent, searching) {
    for (const children of parent) {
        if (arraysAreEqual(children, searching)) return true;
    }
    return false;
}
