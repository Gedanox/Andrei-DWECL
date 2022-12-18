import { editor } from "./editparagraphs.js";

let edit = new editor();
let paragraphs = document.getElementsByClassName("parrafoEditable");
edit.editCreator(paragraphs);