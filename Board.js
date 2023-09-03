export default class Board {
    constructor(knight) {
        const board = [];

        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i].push(" ");
            }
        }
        this.board = board;
    }
    render(path) {
        for (let i = 0; i < path.length; i++) {
            const x = path[i][0];
            const y = path[i][1];
            this.board[y][x] = i;
        }
        console.table(this.board);
    }
}
