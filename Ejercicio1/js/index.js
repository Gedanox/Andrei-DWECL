import { dni } from "./dni.js";

let DNI = new dni();
let sub = document.getElementById("submit");
let inp = document.getElementById("dniinput");
sub.addEventListener("click", () => {
    DNI.dniChecker(inp.value);
});