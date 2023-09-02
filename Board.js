import Knight from "./Knight.js";

class Board {
    constructor(knight) {
        this.knight = knight;

        const board = [];

        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i].push(" ");
            }
        }
        this.board = board;
    }
    render() {
        const x_1 = this.knight.start[0];
        const y_1 = this.knight.start[1];
        this.board[x_1][y_1] = "K";
    }
}

const knight = new Knight();
const board = new Board(knight);
board.render();
knight.knightMoves();
console.table(board.board);
