import { board } from "./game/board.js";

document.getElementById("container");
let boards = new board();
boards.init();
let sub = document.getElementById("submit");
let inp = document.getElementById("posinput");

sub.addEventListener("click", () => {
    boards.checkmove(inp.value);

});
