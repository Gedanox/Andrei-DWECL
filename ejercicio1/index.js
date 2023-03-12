const englishjoke=document.getElementById("left");
const translatedjoke=document.getElementById("right");

let temp = "";


fetch('http://localhost:3000/nontranslated')
    .then((response) => response.json())
    .then((data) => jokebody(data));

fetch('http://localhost:3000/translated')
    .then((response) => response.json())
    .then((data) => jokebody2(data));

function jokebody(jokes){
    let tempjoke = "";
    let jokecontainer = "";

    for (const joke of jokes.data) {
        jokecontainer = document.createElement("div");
        jokecontainer.classList.add("joke");
        for (const part in joke){
            if (part != "id"){
                tempjoke = document.createElement("p");
                tempjoke.classList.add("key");
                tempjoke.setAttribute('class', part);
                tempjoke.innerHTML=joke[part];
                jokecontainer.appendChild(tempjoke);
            }
        }
        englishjoke.appendChild(jokecontainer);
    }
}

function jokebody2(jokes){
    let tempjoke = "";
    let jokecontainer = "";

    for (const joke of jokes.data) {
        jokecontainer = document.createElement("div");
        jokecontainer.classList.add("joke");

        for (const part in joke){
            if (part != "id"){
                tempjoke = document.createElement("p");
                tempjoke.classList.add("key");
                tempjoke.setAttribute('class', part);
                tempjoke.innerHTML=joke[part];
                jokecontainer.appendChild(tempjoke);
            }
        }
        translatedjoke.appendChild(jokecontainer);
    }
}