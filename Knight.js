export default class Knight {
    constructor(start = [3, 3]) {
        this.start = start;
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
        this.graphMoves = this.genGraphIterative();
    }
    genGraphRecursive(start = [0, 0], end = [7, 7], graph = {}) {
        this.knightMoveRules.forEach((move) => {
            const a = start;
            const b = [move[0] + start[0], move[1] + start[1]];

            if (
                graph[`[${a}][${b}]`] ||
                graph[`[${b}][${a}]`] ||
                b[0] > 7 ||
                b[1] > 7 ||
                b[0] < 0 ||
                b[1] < 0
            ) {
                return;
            } else {
                graph[`[${a}][${b}]`] = { a, b };
                this.genGraphRecursive(b, end, graph);
            }
        });

        return graph;
    }
    genGraphIterative() {
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
                    ) {
                        return;
                    }
                    if (graph[`[${x},${y}]`] === undefined)
                        graph[`[${x},${y}]`] = [];
                    graph[`[${x},${y}]`].push(move);
                });
            }
        }
        return graph;
    }

    shortestPath(start = [0, 0], end = [7, 7], path = []) {
        if (start[0] === end[0] && start[1] === end[1]) {
            path.push(end);
            return path;
        }
    }
}
