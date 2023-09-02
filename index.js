import Knight from "./Knight.js";
import Board from "./Board.js";

const knight = new Knight();
const board = new Board();
const start = [0, 0];
const end = [7, 7];
const path = knight.shortestPath(start, end);

console.log(`This is the shortest path from ${start} to ${end}`);
console.log(path);
board.render(path);
