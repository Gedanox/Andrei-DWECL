import { Calculator } from "./calculator.js";

let calculator = new Calculator();
let calcbuttons = document.getElementsByClassName("calcButton");

calculator.init(calcbuttons);