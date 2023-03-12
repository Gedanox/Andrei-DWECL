import { email } from "./email.js";

let emails = new email();
let sub = document.getElementById("submit");
let res = document.getElementById("result");
let inp = document.getElementById("emailinput");
sub.addEventListener("click", () => {
    if (emails.emailChecker(inp.value)){
        res.innerHTML = "Valid email!";
    } else {
        res.innerHTML = "Email format not valid!";
    }
});