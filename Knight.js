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
        this.graphMoves = this.genGraphRecursive();
    }
    genGraphRecursive(start = [0, 0], end = [7, 7], graph = {}, path = []) {
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
                this.knightMovesRecursive(b, end, graph);
            }
        });

        return graph;
    }
}
